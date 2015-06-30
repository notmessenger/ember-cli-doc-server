/* jshint node: true */
'use strict';

var express = require( 'express' );

module.exports = {
    name: 'ember-cli-doc-server',

    serverMiddleware: function( config ) {
        var path = this.project.root + '/docs';

        config.app.get( '/docs', function ( request, response ) {
            response.redirect( '/docs/index.html' );
        });

        config.app.use( '/docs', express.static( path ) );
    }
};