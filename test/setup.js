/**
 * Created by allancutler on 5/14/16.
 */

var jsdom = require('mocha-jsdom');

const fetch = require('node-fetch');

global.fetch = fetch;
global.__DEV__ = false;

// Create DOM for testing
jsdom();
