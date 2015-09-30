var freelancerClone = angular.module('freelancerClone', ['ui.router', 'ngAnimate']);

freelancerClone.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('home', {
    url:"",
    views:{
      'header':{
        templateUrl: 'partials/header.html',
        // controller: 'HeadersCtrl',
      },
      'upper-body':{
        templateUrl:'partials/hero.html',
        controller: 'ImagesCtrl',
      },
      'body':{
        templateUrl:'partials/home.html',
        controller: 'HeroCtrl',
      },
      // 'home.home-splash':{
      //   templateUrl: 'partials/hero.html',
      // },
      'footer':{
        templateUrl: 'partials/footer.html',
      }
    }
  });

  $stateProvider.state('hire', {
    url:"/hire",
    views:{
      'header':{
        templateUrl: 'partials/header.html',
        // controller: 'HeadersCtrl',
      },
      'upper-body':{
        templateUrl:'partials/hire.html',
        controller: 'HeroCtrl',
      },
      'body':{
        templateUrl:'partials/home.html',
        controller: 'HeroCtrl',
      },
      // 'home.home-splash':{
      //   templateUrl: 'partials/hero.html',
      // },
      'footer':{
        templateUrl: 'partials/footer.html',
      }
    }
  });
});
