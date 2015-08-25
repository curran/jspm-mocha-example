import { expect } from 'chai';
import System from 'systemjs';
import '../config.js';

describe('myModule', () => {
  let myModule;

  before((done) => {
    System.import('./lib/myModule.js')
      .then((mod) => myModule = mod)
      .then(() => done())
      .catch((err) => console.error(err));
  });

  describe('Module Loading', () => {
    it('should load', () => {
      expect(myModule['default']).to.equal('myModule works!');
    });
  });

  describe('Test Failing', () => {
    it('should show a failed test', () => {
      expect('apples').to.equal('oranges');
    });
  });
});
