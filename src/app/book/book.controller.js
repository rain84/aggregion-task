(function () {
  'use strict';

  angular
    .module( 'aggregionTask' )
    .controller( 'BookController', BookController );

  /** @ngInject */
  function BookController( serviceDistribution, serviceStorage, $stateParams, $window ) {
    var vm = this,
        _  = $window._;

    vm.book = {};

    vm.isEmpty    = isEmpty;
    vm.isScalar   = isScalar;
    vm.isRepeater = isRepeater;


    activate();


    function activate() {
      vm.book = serviceDistribution.getCatalogs().get( { id : $stateParams.id, extend : 'owner' } ).$promise
        .then( function ( book ) {

          //  get image urls by resourseId
          book.cover = serviceStorage.getSharedImgUrl( book.cover );
          book.previewImages.forEach( function ( img, key ) {
            book.previewImages[key] = serviceStorage.getSharedImgUrl( book.previewImages[key] );
          } );


          /*
           var bookFields = ['title', 'cover', 'description'];
           vm.book        = _.pick( book, bookFields );

           //  make bookFields for list
           bookFields.push( 'previewImages' );
           bookFields = _.chain( book )
           .keys()
           .difference( bookFields )
           .filter( function ( item ) { return item[0] !== '$';} )
           .value()
           ;

           vm.book.list = _.pick( book, bookFields );
           */

          vm.book = book;
        } )
      ;
    }

    function isEmpty( val ) { return _.isEmpty( val ); }

    function isScalar( val ) {return angular.isNumber( val ) || angular.isString( val ) || val === true || val === false;}

    function isRepeater( val ) { return !isEmpty( val ) && (angular.isArray( val ) || angular.isObject( val ));}
  }
})();
