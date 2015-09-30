freelancerClone.controller('HeroCtrl', function HeroCtrl($scope, $stateParams){


  $scope.toggleSplash = function(){
    document.$("row").toggleClass(slideOutLeft, slideInRight);
  }

});
