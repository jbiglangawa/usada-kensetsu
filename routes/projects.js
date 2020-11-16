var express = require('express');
var router = express.Router();
var https = require('https');

var projectsList;
const url = "https://api.npoint.io/75deb24271cd22242a37";
const failedResponse = '{"success" : "false", "error" : "unknown"}'

async function getProjectsList() {
    if(projectsList) {
        console.log('projectsList already fetched from site')
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
                        projectsList = body;
                        resolve(body);
                    }else {
                        reject(failedResponse);
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

function getProjectById(projectId) {
    if(projectsList) {
        const parsedProjectsList = JSON.parse(projectsList);
        const filtered = parsedProjectsList.ProjectsList.filter(element => element.id === projectId);
        return filtered;
    }
}

router.get('/getProjectsList', function(req, res, next) {
    if(!projectsList) {
        let promise = getProjectsList();
        promise.then(result => {
            res.send(result);
        }, result => {
            res.send(result);
        });
    }else {
        res.send(projectsList);
    }
});


router.get('/getProject/:projectId', function(req, res, next) {
    let {projectId} = req.params;
    
    if(!projectsList) {
        let promise = getProjectsList();
        promise.then(result => {
            res.send(getProjectById(projectId))
        }, result => {
            res.send(result);
        });
    }else {
        res.send(getProjectById(projectId))
    }
});

module.exports = router;