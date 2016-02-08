(function () {
  'use strict';

  angular
    .module( 'aggregionTask' )
    .controller( 'CatalogController', CatalogController );

  /** @ngInject */
  function CatalogController( serviceDistribution, serviceStorage, $state, $timeout ) {
    var vm = this,
        idxHovered;

    vm.catalogs = serviceDistribution.getCatalogs().query();

    vm.onMouseEnter   = onMouseEnter;
    vm.isMouseEntered = isMouseEntered;
    vm.showBook       = showBook;


    activate();


    function activate() {
      vm.catalogs.$promise.then( function ( catalogs ) {
        catalogs.forEach( function ( catalog ) {
          catalog.cover = serviceStorage.getSharedImgUrl( catalog.cover );
        } );
      } );
    }

    function onMouseEnter( $index ) { idxHovered = $index; }

    function isMouseEntered( $index ) { return idxHovered === $index;}

    function showBook( resourseId ) {
      $timeout( function () {$state.go( 'book', { id : resourseId } );}, 500 );
    }
  }
})();
