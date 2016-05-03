'use strict';

const diagnostic = require('../lib/diagnostic.js');

const chai = require('chai');
const expect = chai.expect;

describe('objects', function(){
  describe('answerTwo', function(){
    it('is not undefined',function(){
      expect(diagnostic.answerTwo).to.exist;
    });
    it('has property "name", which is not null', function(){
      expect(diagnostic.answerTwo.name).to.exist;
      expect(diagnostic.answerTwo.name).not.to.be.null;
    });
    it('has property "address", which is not null', function(){
      expect(diagnostic.answerTwo.address).to.exist;
      expect(diagnostic.answerTwo.address).not.be.null;
    });
  });
  describe('answerThree', function(){
    it('is not undefined',function(){
      expect(diagnostic.answerThree).to.exist;
    });
    it('has property "name", which is not null', function(){
      expect(diagnostic.answerThree.name).to.exist;
      expect(diagnostic.answerThree.name).not.to.be.null;
    });
    it('has property "species", which is not null', function(){
      expect(diagnostic.answerThree.species).to.exist;
      expect(diagnostic.answerThree.species).not.to.be.null;
    });
    it('has property "breed", which is not null', function(){
      expect(diagnostic.answerThree.breed).to.exist;
      expect(diagnostic.answerThree.breed).not.to.be.null;
    });
    it('has method "vocalize", which returns a string', function(){
      expect(diagnostic.answerThree.vocalize).to.exist;
      expect(typeof diagnostic.answerThree.vocalize()).to.a('string');
    });
  });
});
