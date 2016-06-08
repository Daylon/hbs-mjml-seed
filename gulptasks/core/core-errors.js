'use strict';

const GULP = require( 'gulp' )
, GUTIL = require( 'gulp-util' )

let onError = function( taskName, err ){
  GUTIL.log( GUTIL.colors.red( 'ERROR', taskName ), err);
  this.emit( 'end', new GUTIL.PluginError( taskName, err, { showStack: true } ) );
}

module.exports = onError
