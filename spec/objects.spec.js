'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const expect = chai.expect;

const diagnostic = require('../lib/diagnostic.js');

console.log(diagnostic);
describe('objects', function () {
  describe('answerTwo', function () {
    it('is not undefined', function () {
      expect(diagnostic.answerTwo).to.not.equal(undefined);
    });
    it('has property "name", which is defined', function () {
      expect(diagnostic.answerTwo.name).to.not.equal(undefined);
    });
    it('has property "name", which is not null', function () {
      expect(diagnostic.answerTwo.name).to.not.equal(null);
    });
    it('has property "address", which is defined', function () {
      expect(diagnostic.answerTwo.address).to.not.equal(undefined);
    });
    it('has property "address", which is not null', function () {
      expect(diagnostic.answerTwo.address).to.not.equal(null);
    });
  });
  describe('answerThree', function () {
    it('is not undefined', function () {
      expect(diagnostic.answerThree).to.not.equal(undefined);
    });
    it('has property "name", which is not null', function () {
      expect(diagnostic.answerThree.name).to.not.equal(null);
    });
    it('has property "name", which is defined', function () {
      expect(diagnostic.answerThree.name).to.not.equal(undefined);
    });
    it('has property "species", which is not null', function () {
      expect(diagnostic.answerThree.species).to.not.equal(null);
    });
    it('has property "species", which is defined', function () {
      expect(diagnostic.answerThree.species).to.not.equal(undefined);
    });
    it('has property "breed", which is defined', function () {
      expect(diagnostic.answerThree.breed).to.not.equal(undefined);
    });
    it('has property "breed", which is not null', function () {
      expect(diagnostic.answerThree.breed).to.not.equal(null);
    });
    it('has method "vocalize", which is defined', function () {
      expect(diagnostic.answerThree.vocalize).to.not.equal(undefined);
    });
    it('has method "vocalize", which returns a string', function () {
      expect(typeof diagnostic.answerThree.vocalize()).to.equal('string');
    });
  });
});
