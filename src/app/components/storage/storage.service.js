(function () {
  'use strict';

  angular
    .module( 'aggregionTask' )
    .factory( 'serviceStorage', serviceStorage );

  serviceStorage.$inject = ['apiUrl'];

  /* @ngInject */
  function serviceStorage( apiUrl ) {
    return {
      getSharedImgUrl : getSharedImgUrl
    };


    function getSharedImgUrl( resourceId ) {
      return apiUrl.storage + 'files/' + resourceId + '/shared/data';
    }
  }

})();

