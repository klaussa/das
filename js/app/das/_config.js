angular.module('DojoAnalyticsSuite').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/dashboard")

    $stateProvider
        //Dasboard Abstract
        .state('dashboard', {
            template: '<div class="col-sm-3 col-md-2 sidebar"><ul class="nav nav-sidebar"><li ng-repeat="section in sections "><a ui-sref="{{section.url}}">{{section.title}}</a></li></ul></div><ui-view/>',
            url: '/dashboard',
            controller: 'DashboardAbstractController',
            abstract: true,
        })

        // Index of dashboard
        .state('dashboard.index', {
            url: '',
            templateUrl: 'js/app/das/views/dashboard/dashboard.index.html',
            controller: 'DashboardIndexController'
        })

        //Sections of the Dashboard
        .state('dashboard.categories', {
            templateUrl: 'js/app/das/views/dashboard/dashboard.categories.html'
        })
        .state('dashboard.ideagenerators', {
            templateUrl: 'js/app/das/views/dashboard/dashboard.ideagenerators.html',
            controller: 'DashboardIdeageneratorsController'
        })

        // Ideas State
        .state('dashboard.idea', {
            url: '/idea/:id',
            templateUrl: 'js/app/das/views/dashboard/dashboard.idea.html',
            controller: 'DashboardIdeaController'
        })

        //   /idea/:id:
        // Content Abstract
        .state('content', {
            template: '<div class="col-sm-3 col-md-2 sidebar"><ul class="nav nav-sidebar"><li ng-repeat="section in sections"><a ui-sref="{{section.url}}">{{section.title}}</a></li></ul></div><ui-view/>',
            url: '/content',
            controller: 'ContentAbstractController',
            abstract: true
        })

        .state('content.index', {
            url: '',
            templateUrl: 'js/app/das/views/content/content.index.html',
            controller: 'ContentIndexController'
        })


        //Sections of the Content
        .state('content.categories', {
            templateUrl: 'js/app/das/views/content/content.categories.html'
        })

    $locationProvider.html5Mode(true);
});