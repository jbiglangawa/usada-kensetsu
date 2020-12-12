var express = require('express');
var router = express.Router();
var https = require('https');

var employeesList;
const url = "https://api.npoint.io/1287b9f856d8e57585c3";
const failedResponse = '{"success" : "false", "error" : "unknown"}'

async function getEmployeesList() {
    if(employeesList) {
        console.log('employeesList already fetched from site')
        return;
    }

    let promise = new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let body = "";

            res.on("data", (chunk) => {
                body += chunk;
            });

            res.on("end", () => {
                try {
                    const json = JSON.parse(body);
                    if(json.success && json.success === 'true') {
                        employeesList = body;
                        resolve(body);
                    }else {
                        reject(failedResponse);
                    }
                } catch (error) {
                    console.error(error.message);
                };
            });

        }).on("error", (error) => {
            console.error("Error occurred when fetching employees List: " + error.message);
            reject(`{"success" : "false", "error" : ${JSON.stringify(error)}}`)
        });
    });

    return await promise;
}

router.get('/getEmployeesList', function(req, res, next) {
    if(!employeesList) {
        var promise = getEmployeesList()
        promise.then(result => {
            res.send(result);
        }, result => {
            res.send(result);
        });
    }else {
        res.send(employeesList);
    }
});

module.exports = router;
