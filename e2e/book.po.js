/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var BookPage = function () {

  this.card                = { $ : $( 'md-card' ) };
  this.card.header         = { $ : this.card.$.$( 'md-card-header' ) };
  this.card.header.$button = this.card.header.$.$( '.md-fab' );
  this.card.header.$text   = this.card.header.$.$( '.book--card-header_text' );
  this.card.$image         = this.card.$.$( '.md-card-image' );
  this.card.$content       = this.card.$.$( '.book--content' );
};

module.exports = new BookPage();
