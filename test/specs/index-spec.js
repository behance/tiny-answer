const getAnswer = require('../../src');

describe('tiny-answer', function() {
  it('should return a promise with an answer', function() {
    return getAnswer()
    .then((answer) => {
      expect(answer).toEqual(42);
    });
  });
});
