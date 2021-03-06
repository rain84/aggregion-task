(function () {
  'use strict';

  angular
    .module( 'aggregionTask' )
    .config( routerConfig );

  /** @ngInject */
  function routerConfig( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $stateProvider

      .state( 'catalog', {
        url          : '/',
        templateUrl  : 'app/catalog/catalog.html',
        controller   : 'CatalogController',
        controllerAs : 'vm'
      } )

      .state( 'book', {
        url          : '/book/:id',
        templateUrl  : 'app/book/book.html',
        controller   : 'BookController',
        controllerAs : 'vm'
      } )
    ;

    $urlRouterProvider.otherwise( '/' );
    $locationProvider.html5Mode( true );
  }

})();
