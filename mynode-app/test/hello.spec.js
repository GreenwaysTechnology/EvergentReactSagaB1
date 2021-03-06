//unit testing code

var expect = require('chai').expect

describe('sample test', function () {
    console.log('test       ')
    var foo = 'bar'
    var beverages = { tea: ['chai', 'matcha', 'oolong'] };
    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');
    expect(foo).to.have.lengthOf(3);
    expect(beverages).to.have.property('tea').with.lengthOf(3);
});