var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate a correct message object', () => {
    // store res in variable
    //assert from match
    //assert text match
    // assert createdAt is a number
    var from = "Jen";
    var text = 'Message here';
    var message = generateMessage(from,text);

    expect(message.createdAt).toBeGreaterThan(100);
    expect(message).toMatchObject({from,text});
  });
});
