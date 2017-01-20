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

    const stringProperties = ['name', 'address'];

    stringProperties.forEach(property => {
      describe(property, () => {
        it('is a property.', () => {
          expect(owner[property]).to.not.be.undefined;
        });

        it('is a non-empty string.', () => {
          expect(owner[property]).to.be.a('string').that.is.not.empty;
        });
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

    const stringProperties = ['name', 'species', 'breed', 'vocalization'];

    stringProperties.forEach(property => {
      describe(property, () => {
        it('is a property.', () => {
          expect(pet[property]).to.not.be.undefined;
        });

        it('is a non-empty string.', () => {
          expect(pet[property]).to.be.a('string').that.is.not.empty;
        });
      });
    });
  });
});

const expectedPet = {
  name: 'Seymour',
  species: 'Dog',
  breed: 'Border Terrier',
  vocalization: 'Bark'
};
const expectedPetValues = Object.values(expectedPet);

describe('Question 4', () => {
  describe('Pet', () => {
    it('is a constructor.', () => {
      expect(() => {
        new Pet(...expectedPetValues);
      }).to.not.throw(TypeError);
    });

    const stringProperties = ['name', 'species', 'breed', 'vocalization'];
    const actualPet = new Pet(...expectedPetValues);

    stringProperties.forEach(property => {
      it(`sets "${property}" as a property.`, () => {
        expect(actualPet[property]).to.equal(expectedPet[property]);
      });
    });
  });
});

describe('Question 5', () => {
  const actualPet = new Pet(...expectedPetValues);

  describe('vocalize', () => {
    it('is a method on the Pet prototype.', () => {
      expect(Pet.prototype.vocalize).to.be.a('function');
    });

    it('returns the vocalization property.', () => {
      expect(actualPet.vocalize()).to.equal(expectedPet.vocalization);
    });
  });
});
