// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.8.2-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Resource } from "./";

/**
 * List of the Approvals
 * @export
 * @interface ApprovalDto
 */
export interface ApprovalDto {
    /**
     * UUID of the Approval
     * @type {string}
     * @memberof ApprovalDto
     */
    approvalUuid: string;
    /**
     * UUID of the creator
     * @type {string}
     * @memberof ApprovalDto
     */
    creatorUuid: string;
    /**
     * Version of the Approval profile
     * @type {number}
     * @memberof ApprovalDto
     */
    version: number;
    /**
     * Creation date of the Approval
     * @type {string}
     * @memberof ApprovalDto
     */
    createdAt: string;
    /**
     * Expiry date of the Approval
     * @type {string}
     * @memberof ApprovalDto
     */
    expiryAt: string;
    /**
     * Date of resolution of the Approval
     * @type {string}
     * @memberof ApprovalDto
     */
    closedAt?: string;
    /**
     * Status of the Approval
     * @type {string}
     * @memberof ApprovalDto
     */
    status: ApprovalDtoStatusEnum;
    /**
     * @type {Resource}
     * @memberof ApprovalDto
     */
    resource: Resource;
    /**
     * Resource action of the Approval
     * @type {string}
     * @memberof ApprovalDto
     */
    resourceAction: string;
    /**
     * UUID of the target object of the Approval
     * @type {string}
     * @memberof ApprovalDto
     */
    objectUuid: string;
    /**
     * Name of the Approval profile
     * @type {string}
     * @memberof ApprovalDto
     */
    approvalProfileName: string;
    /**
     * UUID of the Approval profile
     * @type {string}
     * @memberof ApprovalDto
     */
    approvalProfileUuid: string;
}

/**
 * @export
 * @enum {string}
 */
export enum ApprovalDtoStatusEnum {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED",
    Expired = "EXPIRED",
}