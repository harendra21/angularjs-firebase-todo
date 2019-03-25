app.config(function($routeProvider,$controllerProvider){
    app.controller = $controllerProvider.register;
    $routeProvider.when('/',{
        templateUrl : 'src/home/home.html',
        controller : 'homeCtrl',
        resolve: {
            lazy: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load(['src/home/home.js']);
            }],
        },
    });
});