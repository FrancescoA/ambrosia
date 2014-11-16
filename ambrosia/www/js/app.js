// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var ambrosia = angular.module('ambrosia', ['ionic', 'firebase', 'socialAuth.services','ui.bootstrap'])

ambrosia.run(function($ionicPlatform, $state, newUserService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $state.go('login');
  });
})

ambrosia.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: "LoginCtrl"
    })

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })



    // Each tab has its own nav history stack:

    .state('tab.main', {
      url: "/main",
      views: {
        'tab-main': {
          templateUrl: "templates/main.html",
          controller: "MainCtrl"
        }   
      }
    })
    .state('tab.browse', {
      url: "/main/browse",
      views: {
        'tab-main' :{
          templateUrl: "templates/browse.html",
          controller: "BrowseCtrl"
        }
      }
    })
    .state('tab.search', {
      url: "/main/search",
      views: {
        'tab-main' :{
          templateUrl: "templates/search.html",
          controller: "SearchCtrl"
        }
      }
    })
    .state('tab.searchResult', {
      url: "/main/searchResult",
      views: {
        'tab-main' :{
          templateUrl: "templates/searchResult.html",
          controller: "SearchResultCtrl"
        }
      }
    })
    .state('tab.history', {
      url: '/history',
      views: {
        'tab-history': {
          templateUrl: 'templates/tab-history.html',
          controller: 'HistoryCtrl'
        }
      }
    })

    .state('tab.planner', {
      url: '/planner',
      views: {
        'tab-planner': {
          templateUrl: 'templates/tab-planner.html',
          controller: 'PlannerCtrl'
        }
      }
    })
    .state('tab.planner-detail', {
      url: '/planner/:friendId',
      views: {
        'tab-planner': {
          templateUrl: 'templates/planner-detail.html',
          controller: 'PlannerDetailCtrl'
        }
      }
    })

    .state('tab.favorites', {
      url: '/favorites',
      views: {
        'tab-favorites': {
          templateUrl: 'templates/tab-favorites.html',
          controller: 'FavoritesCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/history');

});

//Our Constant Vars
angular.module('socialAuth.services',[])
    .value('NUTRITION_REF', 'https://api.nutritionix.com/v1_1/search')
    .value('NUTRITION_KEY', 'd8798a6f')
    .value('DEFAULT_RESTAURANTS', ["Panda Express", "Subway","Au Bon Pain","Chipotle","McDonalds","IHOP","Papa Johns","TGI Fridays"])
    .value('NUTRITION_SECRET', 'e85bce38e01068373f79724f6b47c824')
    .value('FIREBASE_REF','https://ambrosia.firebaseio.com/')
    .value('userSession',{});

