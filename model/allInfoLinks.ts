/**
 * Harmony Connect
 * An easy to use API that helps you access the Factom blockchain.
 *
 * OpenAPI spec version: 1.0.17
 * Contact: harmony-support@factom.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Links to internal paths of the application
*/
export class AllInfoLinks {
    /**
    * Link to chain api
    */
    'chains': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "chains",
            "baseName": "chains",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AllInfoLinks.attributeTypeMap;
    }
}

