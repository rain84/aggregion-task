/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var CatalogPage = function () {

  this.tiles = $$( 'md-grid-tile' );
  this.tile  = {
    $     : this.tiles.first(),
    card  : this.tiles.first().$( 'md-card' ),
    img   : this.tiles.first().$( 'img' ),
    title : this.tiles.first().$( 'md-card-title' )
  };
};

module.exports = new CatalogPage();
