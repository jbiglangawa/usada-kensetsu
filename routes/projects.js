var https = require('https');
var express = require('express');
var router = express.Router();

async function getProjectsList() {
    let url = "https://api.npoint.io/2a8d6a140c92bbc11d01";

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
                        console.log('Fetching JSON Successful!')
                        resolve(body)
                    }else {
                        reject('{"success" : "false", "error" : "unknown"}')
                    }
                } catch (error) {
                    console.error(error.message);
                };
            });

        }).on("error", (error) => {
            console.error("Error occurred when fetching projects list: " + error.message);
            reject(`{"success" : "false", "error" : ${JSON.stringify(error)}}`)
        });
    });

    return await promise;
}


/* GET users listing. */
router.get('/getProjectsList', function(req, res, next) {
    let promise = getProjectsList();

    promise.then(function successHandler(result) {
        console.log("success: " + result)
        res.send(result);
    },function errorHandler(result) {
        console.log("error: " + result) 
        res.send(result);
    });
});



module.exports = router;