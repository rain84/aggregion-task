'use strict';

xdescribe( 'The catalog view.', function () {
  var webdriver = require( 'selenium-webdriver' ),
      page;

  it( 'setup', function ( done ) {
    browser.get( '/' );
    page = require( './catalog.po.js' );
    done();
  } );

  it( 'should be catalog page', function () {
    expect( browser.getCurrentUrl() ).toBe( 'http://localhost:3000/' );
  } );

  describe( 'All tiles', function () {
    it( 'must exists', function () {
      expect( page.tiles.isPresent() ).toBeTruthy();
    } );

    it( 'should be 11 tiles', function () {
      expect( page.tiles.count() ).toBe( 11 );
    } );
  } );

  describe( '1st tile.', function () {

    it( 'should open book\'s page on click', function () {
      page.tile.$.click();

      expect( browser.getCurrentUrl() ).toMatch( /^http:\/\/localhost:3000\/book\/[\dabcdef]{24}$/ );
      browser.navigate().back();

      /*
       browser.wait( ptor.ExpectedConditions.alertIsPresent(), 5000 );
       var alert = browser.switchTo().alert();
       expect( alert.getText().then( function ( text ) { return text.length}) )
       .toBe( 24 )
       ;
       alert.accept();
       */
    } );

    describe( 'Md-card', function () {
      it( 'should change class when mouse entered', function () {
        expect( page.tile.card.getAttribute( 'class' ) ).toMatch( /md-whiteframe-1dp/ );

        browser.actions().mouseMove( page.tile.card ).perform();
        expect( page.tile.card.getAttribute( 'class' ) ).toMatch( /md-whiteframe-16dp/ );
      } );
    } );

    describe( 'Image', function () {
      it( 'should exists', function () {
        expect( page.tile.img ).toBeDefined();
      } );

      it( 'should have right url', function () {
        expect( page.tile.img.getAttribute( 'src' ) ).toMatch( /^https:\/\/storage.aggregion.com\/api\// );
      } );
    } );

    describe( 'Title', function () {
      it( 'should exists', function () {
        expect( page.tile.title ).toBeDefined();
      } );

      it( 'should have content', function () {
        expect( page.tile.title.getText() ).not.toBe( '' );
        expect( page.tile.title.getText() ).toMatch( /\S+/ );
      } );
    } );

  } );

} );
