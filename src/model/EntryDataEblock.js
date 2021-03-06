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
    root.HarmonyConnectClient.EntryDataEblock = factory(root.HarmonyConnectClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The EntryDataEblock model module.
   * @module model/EntryDataEblock
   * @version 1.0.7
   */

  /**
   * Constructs a new <code>EntryDataEblock</code>.
   * Represents the Entry Block that contains the entry. This will be null if the entry is not at least at the &#x60;factom&#x60; immutability stage.
   * @alias module:model/EntryDataEblock
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>EntryDataEblock</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntryDataEblock} obj Optional instance to populate.
   * @return {module:model/EntryDataEblock} The populated <code>EntryDataEblock</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('keymr')) {
        obj['keymr'] = ApiClient.convertToType(data['keymr'], 'String');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Key Merkle Root for this entry block.
   * @member {String} keymr
   */
  exports.prototype['keymr'] = undefined;
  /**
   * An API link to retrieve all information about this entry block.
   * @member {String} href
   */
  exports.prototype['href'] = undefined;



  return exports;
}));


