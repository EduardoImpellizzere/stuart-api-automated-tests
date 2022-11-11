const chai = require('chai');
const config = require('config');

global.chai = chai;
global.expect = chai.expect;
global.config = config;

chai.use(require('chai-http'));
chai.use(require('chai-shallow-deep-equal'));
