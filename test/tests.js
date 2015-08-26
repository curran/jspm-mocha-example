import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import System from 'systemjs';
import '../config.js';

chai.use(sinonChai);

describe('myModule', () => {
  let _, myModule;

  before((done) => {
    System.import('lodash')
      .then((lodash) => {
        _ = lodash;
        // Mock lodash library
        sinon.spy(_, 'camelCase');
        System.set(System.normalizeSync('lodash'), System.newModule({
          default: _
        }));
      })
      .then(() => System.import('./lib/myModule.js'))
      .then((mod) => myModule = mod)
      .then(() => done())
      .catch((err) => console.error(err));
  });

  describe('Module Loading', () => {
    it('should load', () => {
      expect(myModule['default']).to.equal('myModuleWorks');
      expect(_.camelCase).to.have.been.calledWith('myModule works!');
    });
  });

  describe('Test Failing', () => {
    it('should show a failed test', () => {
      expect('apples').to.equal('oranges');
    });
  });
});
