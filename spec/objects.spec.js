'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;

chai.use(chaiAsPromised);

const { owner, pet, Pet } = require('../lib/diagnostic.js');

describe('Question 2', () => {
  describe('owner', () => {
    it('is an object.', () => {
      expect(owner).to.be.an('object');
    });

    describe('name', () => {
      it('is a property.', () => {
        expect(owner.name).to.not.be.undefined;
      });

      it('is a non-empty string.', () => {
        expect(owner.name).to.be.a('string').that.is.not.empty;
      });
    });

    describe('address', () => {
      it('is a property.', () => {
        expect(owner.address).to.not.be.undefined;
      });

      it('is a non-empty string.', () => {
        expect(owner.address).to.be.a('string').that.is.not.empty;
      });
    });

    describe('numberOfPets', () => {
      it('is a property.', () => {
        expect(owner.name).to.not.be.undefined;
      });

      it('is an integer.', () => {
        expect(Number.isInteger(owner.numberOfPets)).to.be.true;
      });

      it('is non-negative.', () => {
        expect(owner.numberOfPets).to.be.a('number').that.is.at.least(0);
      });
    });
  });
});

describe('Question 3', () => {
  describe('pet', () => {
    it('is an object.', () => {
      expect(pet).to.be.an('object');
    });

    describe('name', () => {
      it('is a property.', () => {
        expect(pet.name).to.not.be.undefined;
      });

      it('is a non-empty string.', () => {
        expect(pet.name).to.be.a('string').that.is.not.empty;
      });
    });

    describe('species', () => {
      it('is a property.', () => {
        expect(pet.species).to.not.be.undefined;
      });

      it('is a non-empty string.', () => {
        expect(pet.species).to.be.a('string').that.is.not.empty;
      });
    });

    describe('breed', () => {
      it('is a property.', () => {
        expect(pet.breed).to.not.be.undefined;
      });

      it('is a non-empty string.', () => {
        expect(pet.breed).to.be.a('string').that.is.not.empty;
      });
    });

    describe('vocalization', () => {
      it('is a property.', () => {
        expect(pet.vocalization).to.not.be.undefined;
      });

      it('is a non-empty string.', () => {
        expect(pet.vocalization).to.be.a('string').that.is.not.empty;
      });
    });
  });
});

describe('Question 4', () => {
  describe('Pet', () => {
    it('is a constructor.', () => {
      expect(() => {
        new Pet('Seymour', 'Dog', 'Border Terrier', 'Bark');
      }).to.not.throw(TypeError);
    });

    const testPet = new Pet('Seymour', 'Dog', 'Border Terrier', 'Bark');

    it('sets "name" as a property.', () => {
      expect(testPet.name).to.equal('Seymour');
    });

    it('sets "species" as a property.', () => {
      expect(testPet.species).to.equal('Dog');
    });

    it('sets "breed" as a property.', () => {
      expect(testPet.breed).to.equal('Border Terrier');
    });

    it('sets "vocalization" as a property.', () => {
      expect(testPet.vocalization).to.equal('Bark');
    });
  });
});

describe('Question 5', () => {
  const testPet = new Pet('Seymour', 'Dog', 'Border Terrier', 'Bark');

  describe('vocalize', () => {
    it('is a method on the Pet prototype.', () => {
      expect(Pet.prototype.vocalize).to.be.a('function');
    });

    it('returns the vocalization property.', () => {
      expect(testPet.vocalize()).to.equal('Bark');
    });
  });
});
