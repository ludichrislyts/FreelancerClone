freelancerClone.controller('HeroCtrl', function HeroCtrl($scope, $stateParams){


  $scope.toggleSplash = function(){
    if ($scope.splash){
      $scope.splash = false;
    }else{
      $scope.splash = true;
    }
  }
  $scope.toggleSplash();
});
