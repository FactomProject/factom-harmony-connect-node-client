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
    define(['ApiClient', 'model/Chain', 'model/ChainCreate', 'model/ChainList', 'model/ChainShort', 'model/SearchBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Chain'), require('../model/ChainCreate'), require('../model/ChainList'), require('../model/ChainShort'), require('../model/SearchBody'));
  } else {
    // Browser globals (root is window)
    if (!root.HarmonyConnectClient) {
      root.HarmonyConnectClient = {};
    }
    root.HarmonyConnectClient.ChainsApi = factory(root.HarmonyConnectClient.ApiClient, root.HarmonyConnectClient.Chain, root.HarmonyConnectClient.ChainCreate, root.HarmonyConnectClient.ChainList, root.HarmonyConnectClient.ChainShort, root.HarmonyConnectClient.SearchBody);
  }
}(this, function(ApiClient, Chain, ChainCreate, ChainList, ChainShort, SearchBody) {
  'use strict';

  /**
   * Chains service.
   * @module api/ChainsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ChainsApi. 
   * @alias module:api/ChainsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getChainByID operation.
     * @callback module:api/ChainsApi~getChainByIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Chain} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Chain Info
     * Get information about a specific chain on Connect
     * @param {String} chainId Chain identifier
     * @param {module:api/ChainsApi~getChainByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Chain}
     */
    this.getChainByID = function(chainId, callback) {
      var postBody = null;

      // verify the required parameter 'chainId' is set
      if (chainId === undefined || chainId === null) {
        throw new Error("Missing the required parameter 'chainId' when calling getChainByID");
      }


      var pathParams = {
        'chain_id': chainId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['AppId', 'AppKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Chain;

      return this.apiClient.callApi(
        '/chains/{chain_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getChains operation.
     * @callback module:api/ChainsApi~getChainsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChainList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Chains
     * Returns all of the chains on factomd.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items you would like back in each page.
     * @param {Number} opts.offset The page you would like to request. The first page offset is Zero.
     * @param {String} opts.stages The immutability stages you want to restrict results to. You can choose any from &#x60;replicated&#x60;, &#x60;factom&#x60;, and &#x60;anchored&#x60;. If you would like to search among multiple stages, send them in a comma separated string. For example: &#x60;&#39;multi_az,factom&#39;&#x60;.
     * @param {module:api/ChainsApi~getChainsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChainList}
     */
    this.getChains = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'stages': opts['stages'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['AppId', 'AppKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ChainList;

      return this.apiClient.callApi(
        '/chains', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postChain operation.
     * @callback module:api/ChainsApi~postChainCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChainShort} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Chain
     * Create a new chain. Each chain functions as a mini-blockchain such that all of the entries are linked. Every entry relies on data from previous entries in the chain. Any unauthorized alterations to any of these entries can be detected. Be aware that data entered into the &#x60;content&#x60; and &#x60;external_ids&#x60; fields must be in Base64 format. Sending this request will cause Connect to create the first entry of the chain. The data entered into the &#x60;content&#x60; and &#x60;external_id&#x60; fields will be applied to this entry.
     * @param {module:model/ChainCreate} chainCreate 
     * @param {module:api/ChainsApi~postChainCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChainShort}
     */
    this.postChain = function(chainCreate, callback) {
      var postBody = chainCreate;

      // verify the required parameter 'chainCreate' is set
      if (chainCreate === undefined || chainCreate === null) {
        throw new Error("Missing the required parameter 'chainCreate' when calling postChain");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['AppId', 'AppKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ChainShort;

      return this.apiClient.callApi(
        '/chains', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postChainSearch operation.
     * @callback module:api/ChainsApi~postChainSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChainList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search Chains
     * Finds all of the chains with &#x60;external_ids&#x60; that match what you&#39;ve entered. External IDs must be sent in Base64 format.
     * @param {module:model/SearchBody} searchBody 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of items you would like back in each page.
     * @param {Number} opts.offset The page you would like to request. The first page offset is Zero.
     * @param {module:api/ChainsApi~postChainSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChainList}
     */
    this.postChainSearch = function(searchBody, opts, callback) {
      opts = opts || {};
      var postBody = searchBody;

      // verify the required parameter 'searchBody' is set
      if (searchBody === undefined || searchBody === null) {
        throw new Error("Missing the required parameter 'searchBody' when calling postChainSearch");
      }


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['AppId', 'AppKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ChainList;

      return this.apiClient.callApi(
        '/chains/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
