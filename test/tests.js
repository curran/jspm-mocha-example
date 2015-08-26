import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import System from 'systemjs';
import '../config.js';

chai.use(sinonChai);

describe('myModule', () => {
  let _, myModule;

  before(() => {
    return System.import('lodash')
      .then((lodash) => {
        _ = lodash;
        // Mock lodash library
        sinon.spy(_, 'camelCase');
        System.set(System.normalizeSync('lodash'), System.newModule({
          default: _
        }));
      })
      .then(() => System.import('./lib/myModule.js'))
      .then((mod) => myModule = mod);
  });

  describe('Module Loading', () => {
    it('should load', () => {
      expect(myModule['default']).to.equal('myModuleWorks');
    });
  });

  describe('Sinon Mocks and Spies', () => {
    it('should mock lodash', () => {
      expect(_.camelCase).to.have.been.calledWith('myModule works!');
    });
  });
});
