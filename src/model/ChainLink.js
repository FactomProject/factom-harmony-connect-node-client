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
    root.HarmonyConnectClient.ChainLink = factory(root.HarmonyConnectClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ChainLink model module.
   * @module model/ChainLink
   * @version 1.0.7
   */

  /**
   * Constructs a new <code>ChainLink</code>.
   * An object that contains the Chain Hash (ID) as well as a URL for the chain.
   * @alias module:model/ChainLink
   * @class
   * @param chainId {String} The ID for this chain on the Factom blockchain.
   * @param href {String} An API link to retrieve all information about this chain.
   */
  var exports = function(chainId, href) {
    var _this = this;

    _this['chain_id'] = chainId;
    _this['href'] = href;
  };

  /**
   * Constructs a <code>ChainLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChainLink} obj Optional instance to populate.
   * @return {module:model/ChainLink} The populated <code>ChainLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('chain_id')) {
        obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID for this chain on the Factom blockchain.
   * @member {String} chain_id
   */
  exports.prototype['chain_id'] = undefined;
  /**
   * An API link to retrieve all information about this chain.
   * @member {String} href
   */
  exports.prototype['href'] = undefined;



  return exports;
}));


