(function () {
  'use strict';

  angular
    .module( 'aggregionTask' )
    .run( runBlock );

  /** @ngInject */
  function runBlock( $log ) {
    $log.debug( 'runBlock end' );
  }

})();
