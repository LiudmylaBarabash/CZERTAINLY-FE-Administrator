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
 * Rules summary
 * @export
 * @interface ComplianceProviderSummaryDto
 */
export interface ComplianceProviderSummaryDto {
    /**
     * Name of the Compliance Provider
     * @type {string}
     * @memberof ComplianceProviderSummaryDto
     */
    connectorName: string;
    /**
     * Number of rules for the Provider
     * @type {number}
     * @memberof ComplianceProviderSummaryDto
     */
    numberOfRules?: number;
    /**
     * Number of groups for the Provider
     * @type {number}
     * @memberof ComplianceProviderSummaryDto
     */
    numberOfGroups?: number;
}
