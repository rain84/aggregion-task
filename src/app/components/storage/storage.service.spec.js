(function () {
  'use strict';

  describe( 'Service Storage', function () {

    var $httpBackend,
        serviceStorage;

    beforeEach( module( 'aggregionTask' ) );
    beforeEach( inject( function ( $injector, _$httpBackend_, _$cacheFactory_, _$resource_, _apiUrl_ ) {

      $httpBackend   = _$httpBackend_;
      serviceStorage = $injector.get( 'serviceStorage', {
        $cacheFactory : _$cacheFactory_, $resource : _$resource_, apiUrl : _apiUrl_
      } );

    } ) );


    it( 'serviceStorage should to be an object', function () {
      expect( typeof serviceStorage ).toEqual( 'object' );
    } );

    it( 'serviceStorage should have "getSharedImgUrl"', function () {
      expect( typeof serviceStorage.getSharedImgUrl ).toEqual( 'function' );
    } );

    describe( 'getSharedImgUrl()', function () {

      it( 'should return right url', function () {
        var resourceId = 777;
        expect( serviceStorage.getSharedImgUrl( resourceId ) )
          .toBe( 'https://storage.aggregion.com/api/files/' + resourceId + '/shared/data' );
      } );

    } );
  } );
})();

