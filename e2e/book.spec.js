'use strict';

describe( 'The catalog view.', function () {

  var webdriver = require( 'selenium-webdriver' ),
      page;

  it( 'setup', function ( done ) {
    browser.get( '/book/557f0781c721d4860d9e1916' );
    page = require( './book.po.js' );
    done();
  } );

  it( 'should be catalog page', function () {
    expect( browser.getCurrentUrl() ).toBe( 'http://localhost:3000/book/557f0781c721d4860d9e1916' );
  } );

  describe( 'Book card.', function () {
    it( 'must exists', function () {
      expect( page.card.$.isPresent() ).toBeTruthy();
    } );

    describe( 'Header.', function () {

      it( 'must exists', function () {
        expect( page.card.header.$.isPresent() ).toBeTruthy();
      } );

      it( 'Button should exist and open catalog page on click', function () {
        expect( page.card.header.$button.isPresent() ).toBeTruthy();

        page.card.header.$button.click();
        expect( browser.getCurrentUrl() ).toBe( 'http://localhost:3000/' );

        browser.navigate().back();
      } );

      it( 'Header text should have text', function () {
        expect( page.card.header.$text.getText() ).not.toBe( '' );
      } );
    } );

    describe( 'Content.', function () {
      it( 'Image should exist', function () {
        expect( page.card.$image.isPresent() ).toBeTruthy();
      } );

      it( 'Content should exist and have text', function () {
        expect( page.card.$content.isPresent() ).toBeTruthy();
        expect( page.card.$content.getText() ).not.toBe( '' );
      } );
    } );
  } );
} );
