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

/**
 * @export
 * @interface AuthenticationServiceExceptionDto
 */
export interface AuthenticationServiceExceptionDto {
    /**
     * Status code of the HTTP Request
     * @type {number}
     * @memberof AuthenticationServiceExceptionDto
     */
    statusCode: number;
    /**
     * Code of the result
     * @type {string}
     * @memberof AuthenticationServiceExceptionDto
     */
    code: string;
    /**
     * Exception message
     * @type {string}
     * @memberof AuthenticationServiceExceptionDto
     */
    message: string;
}