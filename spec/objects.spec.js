'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const expect = chai.expect;

const diagnostic = require('../lib/diagnostic.js');

console.log(diagnostic);

describe('objects', function(){
  describe('answerTwo', function(){
    it('is not undefined',function(){
      return expect(diagnostic.answerTwo) !== undefined;
    });
    it('has property "name", which is defined', function(){
      return expect(diagnostic.answerTwo.name) !== undefined;
    });
    it('has property "name", which is not null', function(){
      return expect(diagnostic.answerTwo.name) !== null;
    });
    it('has property "address", which is defined', function(){
      return expect(diagnostic.answerTwo.address) !== undefined;
    });
    it('has property "address", which is not null', function(){
      return expect(diagnostic.answerTwo.address) !== null;
    });
  });
  describe('answerThree', function(){
    it('is not undefined',function(){
      return expect(diagnostic.answerThree) !== undefined;
    });
    it('has property "name", which is not null', function(){
      return expect(diagnostic.answerThree.name) !== null;
    });
    it('has property "name", which is defined', function(){
      return expect(diagnostic.answerThree.name) !== undefined;
    });
    it('has property "species", which is not null', function(){
      return expect(diagnostic.answerThree.species) !== null;
    });
    it('has property "species", which is defined', function(){
      return expect(diagnostic.answerThree.species) !== undefined;
    });
    it('has property "breed", which is defined', function(){
      return expect(diagnostic.answerThree.breed) !== undefined;
    });
    it('has property "breed", which is not null', function(){
      return expect(diagnostic.answerThree.breed) !== null;
    });
    it('has method "vocalize", which is defined', function(){
      return expect(diagnostic.answerThree.vocalize) !== undefined;
    });
    it('has method "vocalize", which returns a string', function(){
      return expect(typeof diagnostic.answerThree.vocalize()) === 'string';
    });
  });
});
