'use strict';

var diagnostic = require('../lib/diagnostic.js');

console.log(diagnostic);

describe('objects', function(){
  describe('answerTwo', function(){
    it('is not undefined',function(){
      expect(diagnostic.answerTwo).toBeDefined();
    });
    it('has property "name", which is not null', function(){
      expect(diagnostic.answerTwo.name).toBeDefined();
      expect(diagnostic.answerTwo.name).not.toBeNull();
    });
    it('has property "address", which is not null', function(){
      expect(diagnostic.answerTwo.address).toBeDefined();
      expect(diagnostic.answerTwo.address).not.toBeNull();
    });
  });
  describe('answerThree', function(){
    it('is not undefined',function(){
      expect(diagnostic.answerThree).toBeDefined();
    });
    it('has property "name", which is not null', function(){
      expect(diagnostic.answerThree.name).toBeDefined();
      expect(diagnostic.answerThree.name).not.toBeNull();
    });
    it('has property "species", which is not null', function(){
      expect(diagnostic.answerThree.species).toBeDefined();
      expect(diagnostic.answerThree.species).not.toBeNull();
    });
    it('has property "breed", which is not null', function(){
      expect(diagnostic.answerThree.breed).toBeDefined();
      expect(diagnostic.answerThree.breed).not.toBeNull();
    });
    it('has method "vocalize", which returns a string', function(){
      expect(diagnostic.answerThree.vocalize).toBeDefined();
      expect(typeof diagnostic.answerThree.vocalize()).toBe('string');
    });
  });
});
