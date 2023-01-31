// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 1.5.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    AttributeContentType,
    AttributeType,
    BaseAttributeContentDto,
    CustomAttributeProperties,
} from './';

/**
 * Custom attribute allows to store and transfer dynamic data. Its content can be edited and send in requests to store.
 * @export
 * @interface CustomAttribute
 */
export interface CustomAttribute {
    /**
     * UUID of the Attribute for unique identification
     * @type {string}
     * @memberof CustomAttribute
     */
    uuid: string;
    /**
     * Name of the Attribute that is used for identification
     * @type {string}
     * @memberof CustomAttribute
     */
    name: string;
    /**
     * Optional description of the Attribute, should contain helper text on what is expected
     * @type {string}
     * @memberof CustomAttribute
     */
    description?: string;
    /**
     * Content of the Attribute
     * @type {Array<BaseAttributeContentDto>}
     * @memberof CustomAttribute
     */
    content?: Array<BaseAttributeContentDto>;
    /**
     * @type {AttributeType}
     * @memberof CustomAttribute
     */
    type: AttributeType;
    /**
     * @type {AttributeContentType}
     * @memberof CustomAttribute
     */
    contentType: AttributeContentType;
    /**
     * @type {CustomAttributeProperties}
     * @memberof CustomAttribute
     */
    properties: CustomAttributeProperties;
}