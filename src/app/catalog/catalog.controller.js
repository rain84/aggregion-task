(function () {
  'use strict';

  angular
    .module( 'aggregionTask' )
    .controller( 'CatalogController', CatalogController );

  /** @ngInject */
  function CatalogController( serviceDistribution, serviceStorage, $state, _ ) {
    var vm = this,
        idxHovered;

    vm.catalogs = serviceDistribution.getCatalogs().query();

    vm.onMouseEnter   = onMouseEnter;
    vm.isMouseEntered = isMouseEntered;
    vm.showBook       = showBook;


    var catalog = {
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
      setTimeout( function () {$state.go( 'book', { id : resourseId } );}, 500 );
    }
  }
})();
