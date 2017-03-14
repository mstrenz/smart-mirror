function Jenkins($scope, $http, SpeechService, Focus) {

    // Run Jenkins Job
    SpeechService.addCommand('jenkins_build', function () {
        var request = require('request');

        // Set the headers
        var headers = {
            'User-Agent':       'Super Agent/0.0.1',
            'Content-Type':     'application/x-www-form-urlencoded'
        };

        // Configure the request
        var options = {
            url: 'https://mstrenz:443e406c249b4fbc4f4e052d4e1f56b9@builder.ecovate.com/view/CC/job/ccws-qa/build?token=443e406c249b4fbc4f4e052d4e1f56b9',
            method: 'POST',
            headers: headers,
            form: '{"parameter": [{"name": "BRANCH", "value": "master"}, {"name": "HOST", "value": "https://cc.readytalk.com"}, {"name": "TASK", "value": "test"}, {"name": "LOGS", "value": "error"} ]}'
        };

        // Start the request
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // Print out the response body
                console.log(body)
            }
        })
    });

}

angular.module('SmartMirror')
    .controller('Jenkins', Jenkins);