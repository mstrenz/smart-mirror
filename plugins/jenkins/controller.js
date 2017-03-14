function Jenkins($scope, $http, SpeechService, Focus) {

    // Run Jenkins Job
    SpeechService.addCommand('jenkins_build', function () {

    });

}

angular.module('SmartMirror')
    .controller('Jenkins', Jenkins);