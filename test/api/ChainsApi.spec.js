/**
 * Harmony Connect
 * An easy to use API that helps you access the Factom blockchain.
 *
 * OpenAPI spec version: 1.0.17
 * Contact: harmony-support@factom.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HarmonyConnectClient);
  }
}(this, function(expect, HarmonyConnectClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HarmonyConnectClient.ChainsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ChainsApi', function() {
    describe('getChainByID', function() {
      it('should call getChainByID successfully', function(done) {
        //uncomment below and update the code to test getChainByID
        //instance.getChainByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChains', function() {
      it('should call getChains successfully', function(done) {
        //uncomment below and update the code to test getChains
        //instance.getChains(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postChain', function() {
      it('should call postChain successfully', function(done) {
        //uncomment below and update the code to test postChain
        //instance.postChain(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postChainSearch', function() {
      it('should call postChainSearch successfully', function(done) {
        //uncomment below and update the code to test postChainSearch
        //instance.postChainSearch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
