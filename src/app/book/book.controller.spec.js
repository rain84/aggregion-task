(function () {
  'use strict';

  describe( 'BookController. ', function () {
    var id = "557575769971dba834592054",
        vm,
        $stateParams,
        $httpBackend;

    beforeEach( module( 'aggregionTask' ) );
    beforeEach( inject( function ( _$controller_, _$httpBackend_, _$stateParams_ ) {
      $stateParams    = _$stateParams_;
      $stateParams.id = id;

      $httpBackend = _$httpBackend_;
      $httpBackend.whenGET( 'https://ds.aggregion.com/api/public/catalog/557575769971dba834592054?extend=owner' )
        .respond( 200, {
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
        } );

      vm = _$controller_( 'BookController' );

      $httpBackend.flush();
    } ) );

    describe( 'Vm.book ', function () {
      it( 'should be defined', function () {
        expect( vm.book ).toBeDefined();
      } );

      it( 'should be object', function () {
        expect( angular.isObject( vm.book ) ).toBeTruthy();
      } );

      it( 'should have right ID', function () {
        expect( vm.book.id ).toBe( id );
      } );

      it( 'vm.book.cover should have right url', function () {
        expect( vm.book.cover ).toBe( 'https://storage.aggregion.com/api/files/c63c69e0097da2cbbb9d87008d0e3bc34ffb5295f78f4a0fa6fa7f2335e03f66/shared/data' );
      } );
    } );

    describe( "Controller's methods.", function () {
      it( "vm.isEmpty() should return 'true' on empty obj", function () {
        expect( vm.isEmpty( {} ) ).toBeTruthy();
        expect( vm.isEmpty( [] ) ).toBeTruthy();
      } );

      it( "vm.isScalar() should return 'true' on scalars", function () {
        expect( vm.isScalar( 1 ) ).toBeTruthy();
        expect( vm.isScalar( "" ) ).toBeTruthy();
        expect( vm.isScalar( true ) ).toBeTruthy();
        expect( vm.isScalar( [] ) ).toBeFalsy();
        expect( vm.isScalar( {} ) ).toBeFalsy();
      } );

      it( "vm.isRepeater() should return 'true' on not empty arrays or objects", function () {
        expect( vm.isRepeater( [1] ) ).toBeTruthy();
        expect( vm.isRepeater( { a : 1 } ) ).toBeTruthy();
        expect( vm.isRepeater( [] ) ).toBeFalsy();
        expect( vm.isRepeater( [] ) ).toBeFalsy();
        expect( vm.isRepeater( 1 ) ).toBeFalsy();
        expect( vm.isRepeater( "" ) ).toBeFalsy();
        expect( vm.isRepeater( true ) ).toBeFalsy();
      } );
    } );
  } );
})();
