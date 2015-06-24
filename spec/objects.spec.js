'use strict';

var challenge = require('../lib/challenge.js');

console.log(challenge);

describe('objects', function(){
  describe('answerTwo', function(){
    it('is not undefined',function(){
      expect(challenge.answerTwo).not.toBe(undefined);
    });
    it('has property "name", which is not null', function(){
      expect(challenge.answerTwo.name).not.toBe(undefined);
      expect(challenge.answerTwo.name).not.toBe(null);
    });
    it('has property "address", which is not null', function(){
      expect(challenge.answerTwo.address).not.toBe(undefined);
      expect(challenge.answerTwo.address).not.toBe(null);
    });
  });
  describe('answerThree', function(){
    it('is not undefined',function(){
      expect(challenge.answerThree).not.toBe(undefined);
    });
    it('has property "name", which is not null', function(){
      expect(challenge.answerThree.name).not.toBe(undefined);
      expect(challenge.answerThree.name).not.toBe(null);
    });
    it('has property "species", which is not null', function(){
      expect(challenge.answerThree.species).not.toBe(undefined);
      expect(challenge.answerThree.species).not.toBe(null);
    });
    it('has property "breed", which is not null', function(){
      expect(challenge.answerThree.breed).not.toBe(undefined);
      expect(challenge.answerThree.breed).not.toBe(null);
    });
    it('has method "makeNoise", which returns a string', function(){
      expect(challenge.answerThree.makeNoise).not.toBe(undefined);
      expect(typeof challenge.answerThree.makeNoise).toBe('function');
      expect(typeof challenge.answerThree.makeNoise()).toBe('string');
    });
  });
});
