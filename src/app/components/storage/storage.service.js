(function () {
  'use strict';

  angular
    .module( 'aggregionTask' )
    .factory( 'serviceStorage', serviceStorage );

  serviceStorage.$inject = ['$cacheFactory', '$resource', 'apiUrl'];

  /* @ngInject */
  function serviceStorage( $cacheFactory, $resource, apiUrl ) {
    var cache = $cacheFactory( 'storage' );
    return {
      //getSharedData   : getSharedData,
      getSharedImgUrl : getSharedImgUrl
    };


    //storage.aggregion.com/api/files/{resourceId}/shared/data
    //function getSharedData( resourceId ) {
    //  return $resource( apiUrl.storage + 'files/' + resourceId + '/shared/data',
    //                    {},
    //                    { get : { cache : cache }, }
    //  );
    //}

    function getSharedImgUrl( resourceId ) {
      return apiUrl.storage + 'files/' + resourceId + '/shared/data';
    }
  }

})();

