(function () {
  'use strict';

  angular
    .module( 'aggregionTask' )
    .factory( 'serviceDistribution', serviceDistribution );

  serviceDistribution.$inject = ['$cacheFactory', '$resource', 'apiUrl'];

  /* @ngInject */
  function serviceDistribution( $cacheFactory, $resource, apiUrl ) {
    var cache = $cacheFactory( 'distribution' );

    return {
      getCatalogs : getCatalogs
    };


    function getCatalogs() {
      return $resource( apiUrl.distribution + 'catalog/:id',
                        { id : '@id' },
                        {
                          get   : { cache : cache },
                          query : { cache : cache, isArray : true }
                        }
      );
    }
  }

})();

