angular.module('pickup', ['ionic', 
                          'pickup.controllers',
                          'pickup.services',
                          'ngCordova',
                          'uiGmapgoogle-maps'
                          ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization,places'
    });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'menu/menu.html',
    controller: 'AppCtrl'
  })

  // Home
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  // Home Tabs
  .state('app.home.map', {
      url: "/map",
      views: {
        'map-tab': {
          templateUrl: "map/map.html",
          controller: 'MapCtrl'
        }
      }
    })
  
  // Register
  .state('app.register', {
    url: '/register',
    views: {
      'menuContent': {
        templateUrl: 'register/register.html',
        controller: 'RegisterCtrl'
      }
    }
  })

  // Login
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  // My Games
  .state('app.myGames', {
    url: '/mygames',
    views: {
      'menuContent': {
        templateUrl: 'games/my_games.html',
        controller: 'MyGamesCtrl'
      }
    }
  })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'playlist/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('app/register');
});
