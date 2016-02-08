/**
 * Created by Rain Summers on 07.02.2016.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */

(function () {
  angular.module( 'underscore', [] )
    .factory( '_', function () {
      return _.noConflict();
    } )
  ;
}());
