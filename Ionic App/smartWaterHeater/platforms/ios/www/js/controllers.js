angular.module('starter.controllers', [])




.controller('DashCtrl', function($scope, $http, $stateParams, $sce, $ionicLoading) {

   var apiUrl='https://api.particle.io/v1/devices/260041000447343339373536/turn'
   var parameters = 'access_token=163da3350def7f60d6598ccccd084eadc3acf291&command=toggle'

   $scope.toggleWaterHeater = function() {

     $http.post(apiUrl, parameters, {
        headers: {
                   'Content-Type' : 'application/x-www-form-urlencoded'
               }
        })
       .success(function(data, status, headers,config){
         console.log('data success');
         alert('Prendiste/Apagaste el Boiler');
         console.log(data); // for browser console
         $scope.result = data; // for UI
       })
       .error(function(data, status, headers,config){
          alert('ERROR INTENTA DE NUEVO');
         console.log('data error');
       })
       .then(function(result){
         things = result.data;
       });

    }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
