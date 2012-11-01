var test = require('tap').test;
var toggle = require('../');

test('toggle some endians', function (t) {
    var buf = new Buffer('abcd');
    
    t.equal(toggle(buf, 16).toString(), 'badc');
    t.equal(buf.toString(), 'abcd');
    
    t.end('ian');
});
