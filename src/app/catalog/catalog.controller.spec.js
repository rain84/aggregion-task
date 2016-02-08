(function () {
  'use strict';

  describe( 'CatalogController. ', function () {
    var vm,
        $timeout,
        serviceDistribution,
        serviceStorage,
        $httpBackend;


    beforeEach( module( 'aggregionTask' ) );
    beforeEach( inject( function ( $injector, _$controller_, _$httpBackend_ ) {
      $httpBackend = _$httpBackend_;

      vm = _$controller_( 'CatalogController' );

      $httpBackend.whenGET( 'https://ds.aggregion.com/api/public/catalog' )
        .respond( 200, [
          {
            "title"            : { "default" : "Pride and Prejudice" },
            "description"      : { "default" : "Pride and Prejudice" },
            "cover"            : "c63c69e0097da2cbbb9d87008d0e3bc34ffb5295f78f4a0fa6fa7f2335e03f66",
            "options"          : { "authors" : "Austen J." },
            "owner"            : "557569da9971dba834592033",
            "licenseParams"    : [],
            "contentType"      : "catalog",
            "publishingStatus" : "none",
            "maxKeys"          : 15,
            "previewVideos"    : [],
            "previewImages"    : ["cdf6b42b00738004cf3dd3198138b6283b9224aa860b4d23763d84b36de201b1"],
            "platformSupport"  : ["windows", "ios", "android", "macosx"],
            "tags"             : [],
            "id"               : "557575769971dba834592054"
          }
        ] );

      $httpBackend.flush();
    } ) );

    describe( 'Vm.catalogs ', function () {
      it( 'should be defined', function () {
        expect( vm.catalogs ).toBeDefined();
      } );

      it( 'should be array', function () {
        expect( angular.isArray( vm.catalogs ) ).toBeTruthy();
      } );

      it( 'should have 1 element', function () {
        expect( vm.catalogs.length ).toBe( 1 );
      } );

      it( 'should have right ID', function () {
        expect( vm.catalogs[0].id ).toBe( '557575769971dba834592054' );
      } );
    } );

    describe( "EnteredIdx, onMouseEnter(), && isMouseEntered().", function () {
      it( "onMouseEnter() should setup 'EnteredIdx' && isMouseEntered() should check 'EnteredIdx' in right way  ", function () {
        var $index = 7;
        vm.onMouseEnter( $index );

        expect( vm.isMouseEntered( $index ) ).toBeTruthy();
      } );
    } );
  } );
})();
