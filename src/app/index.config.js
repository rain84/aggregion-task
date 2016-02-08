(function () {
  'use strict';

  angular
    .module( 'aggregionTask' )
    .config( config );

  /** @ngInject */
  function config( $mdThemingProvider) {
    $mdThemingProvider.theme( 'default' )
      .accentPalette( 'lime' )
    ;
  }

})();
