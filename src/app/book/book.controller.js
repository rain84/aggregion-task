(function () {
  'use strict';

  angular
    .module( 'aggregionTask' )
    .controller( 'BookController', BookController );

  /** @ngInject */
  function BookController( serviceDistribution, serviceStorage, $timeout, $stateParams, _ ) {
    var vm = this;

    //vm.bookId = $stateParams.id;
    vm.book = {};

    vm.isEmpty    = isEmpty;
    vm.isScalar   = isScalar;
    vm.isRepeater = isRepeater;

    var book = {
      "title"            : { "default" : "Pride and Prejudice" },
      "description"      : { "default" : "Pride and Prejudice" },
      "cover"            : "c63c69e0097da2cbbb9d87008d0e3bc34ffb5295f78f4a0fa6fa7f2335e03f66",
      "options"          : { "authors" : "Austen J." },
      "owner"            : {
        "name"                : "Garbage Ltd",
        "organizationDetails" : { "country" : "Россия", "city" : "Москва", "uniqNumber" : "agg54003979032/27661439252", "inn" : "agg54003979032", "kpp" : "27661439252" },
        "isOrganization"      : true,
        "id"                  : "557569da9971dba834592033"
      },
      "licenseParams"    : [],
      "contentType"      : "catalog",
      "publishingStatus" : "none",
      "maxKeys"          : 15,
      "previewVideos"    : [],
      "previewImages"    : ["cdf6b42b00738004cf3dd3198138b6283b9224aa860b4d23763d84b36de201b1"],
      "platformSupport"  : ["windows", "ios", "android", "macosx"],
      "tags"             : [],
      "id"               : "557575769971dba834592054"
    };

    var bl = {
      "title"            : { "default" : "Pride and Prejudice" },
      "description"      : { "default" : "Pride and Prejudice" },
      "cover"            : "https://storage.aggregion.com/api/files/c63c69e0097da2cbbb9d87008d0e3bc34ffb5295f78f4a0fa6fa7f2335e03f66/shared/data",
      "options"          : { "authors" : "Austen J." },
      "owner"            : {
        "name"                : "Garbage Ltd",
        "organizationDetails" : { "country" : "Россия", "city" : "Москва", "uniqNumber" : "agg54003979032/27661439252", "inn" : "agg54003979032", "kpp" : "27661439252" },
        "isOrganization"      : true,
        "id"                  : "557569da9971dba834592033"
      },
      "licenseParams"    : [],
      "contentType"      : "catalog",
      "publishingStatus" : "none",
      "maxKeys"          : 15,
      "previewVideos"    : [],
      "previewImages"    : ["https://storage.aggregion.com/api/files/cdf6b42b00738004cf3dd3198138b6283b9224aa860b4d23763d84b36de201b1/shared/data"],
      "platformSupport"  : ["windows", "ios", "android", "macosx"],
      "tags"             : [],
      "id"               : "557575769971dba834592054"
    };

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
          console.log( 'vm.book : %O', vm.book );
        } )
      ;
    }

    function isEmpty( val ) { return _.isEmpty( val ); }

    function isScalar( val ) {return angular.isNumber( val ) || angular.isString( val );}

    function isRepeater( val ) { return !isEmpty( val ) && (angular.isArray( val ) || angular.isObject( val ));}
  }
})();
