(function () {
  'use strict';

  angular
    .module( 'aggregionTask' )
    .constant( 'apiUrl', {
      id           : 'https://id.aggregion.com/api/',
      distribution : 'https://ds.aggregion.com/api/public/',
      storage      : 'https://storage.aggregion.com/api/'
    } )
  ;
})();
