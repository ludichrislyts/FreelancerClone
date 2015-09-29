var freelancerClone = angular.module('freelancerClone', ['ui.router']);

freelancerClone.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('home', {
    url:"",
    views:{
      'header':{
        templateUrl: 'partials/header.html',
        // controller: 'HeadersCtrl',
      },
      'body':{
        templateUrl:'partials/home.html',
        controller: 'ImagesCtrl'
      },
      'footer':{
        templateUrl: 'partials/footer.html',
      },
    }
  });
});
