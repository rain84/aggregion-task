(function () {
  'use strict';

  describe( 'Service Distribution', function () {

    var $httpBackend,
        serviceDistribution;

    beforeEach( module( 'aggregionTask' ) );
    beforeEach( inject( function ( $injector, _$httpBackend_, _$cacheFactory_, _$resource_, _apiUrl_ ) {

      $httpBackend        = _$httpBackend_;
      serviceDistribution = $injector.get( 'serviceDistribution', {
        $cacheFactory : _$cacheFactory_, $resource : _$resource_, apiUrl : _apiUrl_
      } );

      $httpBackend
        .whenGET( 'https://ds.aggregion.com/api/public/catalog' )
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

      $httpBackend
        .whenGET( 'https://ds.aggregion.com/api/public/catalog/557575769971dba834592054' )
        .respond( 200, {
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
        } );
    } ) );


    it( 'should to be an object', function () {
      expect( typeof serviceDistribution ).toEqual( 'object' );
    } );

    it( 'serviceDistribution should have "getCatalogs"', function () {
      expect( typeof serviceDistribution.getCatalogs ).toEqual( 'function' );
    } );

    describe( 'getCatalogs().query() XHR', function () {
      var catalogs;

      beforeEach( function () {
        catalogs = serviceDistribution.getCatalogs().query();
        $httpBackend.flush();
      } );

      it( 'catalogs to be an array', function () {
        expect( angular.isArray( catalogs ) ).toBeTruthy();
      } );

      it( 'catalogs[0] should have "id", "title", "description" fields ', function () {
        expect( catalogs[0].id &&
                catalogs[0].title &&
                catalogs[0].description )
          .toBeTruthy();
      } );

      xit( 'leaders(33) should throw an error"', function () {
        expect( function () {
          corporateFactory.getLeaders().get( { id : 33 } );
          $httpBackend.flush();
        } ).toThrow();
      } );
    } );

    describe( 'getCatalogs().get() XHR', function () {
      var catalog;

      beforeEach( function () {
        catalog = serviceDistribution.getCatalogs().get( { id : '557575769971dba834592054' } );
        $httpBackend.flush();
      } );

      it( 'catalog should be an object', function () {
        expect( angular.isObject( catalog ) ).toBeTruthy();
      } );

      it( 'catalog should have "id", "title", "description" fields ', function () {
        expect( catalog.id &&
                catalog.title &&
                catalog.description )
          .toBeTruthy();
      } );
    } );

  } );
})();

