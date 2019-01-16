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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HarmonyConnectClient) {
      root.HarmonyConnectClient = {};
    }
    root.HarmonyConnectClient.AllInfoLinks = factory(root.HarmonyConnectClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AllInfoLinks model module.
   * @module model/AllInfoLinks
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AllInfoLinks</code>.
   * Links to internal paths of the application
   * @alias module:model/AllInfoLinks
   * @class
   * @param chains {String} Link to chain api
   */
  var exports = function(chains) {
    var _this = this;

    _this['chains'] = chains;
  };

  /**
   * Constructs a <code>AllInfoLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllInfoLinks} obj Optional instance to populate.
   * @return {module:model/AllInfoLinks} The populated <code>AllInfoLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('chains')) {
        obj['chains'] = ApiClient.convertToType(data['chains'], 'String');
      }
    }
    return obj;
  }

  /**
   * Link to chain api
   * @member {String} chains
   */
  exports.prototype['chains'] = undefined;



  return exports;
}));

