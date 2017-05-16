angular.module('Platzi', []);
// angular.module('Platzi').controller('BaseCtrl', ['$scope', '$http', function($scope, $http)
angular.module('Platzi').controller('BaseCtrl', ['$scope', function($scope){

    // $http.get('/emoji').then(function (response){
    //     $scope.emojis = response.data;
    // })
    // .catch (function(err){

    // });

    io.socket.get('/emoji', function (data){
        $scope.emojis = data;
        $scope.$apply();
    });

    io.socket.on('emoji', function(event){
        switch (event.verb){
            case 'created': 
                $scope.emojis.push(event.data);
                $scope.$apply();
                break;
        }
    });

    // Fake emojis
    // $scope.emojis = [{
    //     id: 1,
    //     text: '=)'
    // },
    // {
    //     id: 2,
    //     text: ':-)'
    // },
    // {
    //     id: 3,
    //     text: 'B)'
    // },
    // {
    //     id: 4,
    //     text: ':)'
    // }
    // ];
}]);