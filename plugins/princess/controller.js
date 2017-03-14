function Princess($scope, $http, SpeechService, Focus) {

    // Show xkcd comic
    SpeechService.addCommand('image_princess', function () {

        $scope.princess = "https://www.celebritysizes.com/wp-content/uploads/2016/03/Olivia-Munn.jpg";
        Focus.change("princess");
    });
}

angular.module('SmartMirror')
    .controller('princess', Princess);