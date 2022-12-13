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
 * @interface AuditLogFilter
 */
export interface AuditLogFilter {
    /**
     * Author of the action triggered audit log
     * @type {string}
     * @memberof AuditLogFilter
     */
    author?: string;
    /**
     * Start time of the filter
     * @type {string}
     * @memberof AuditLogFilter
     */
    createdFrom?: string;
    /**
     * End time of the filter
     * @type {string}
     * @memberof AuditLogFilter
     */
    createdTo?: string;
    /**
     * Status of the filter
     * @type {string}
     * @memberof AuditLogFilter
     */
    operationStatus?: AuditLogFilterOperationStatusEnum;
    /**
     * Module triggered the action
     * @type {string}
     * @memberof AuditLogFilter
     */
    origination?: AuditLogFilterOriginationEnum;
    /**
     * Module affected by the action
     * @type {string}
     * @memberof AuditLogFilter
     */
    affected?: AuditLogFilterAffectedEnum;
    /**
     * Identifier of the object created
     * @type {string}
     * @memberof AuditLogFilter
     */
    objectIdentifier?: string;
    /**
     * Type of the operation
     * @type {string}
     * @memberof AuditLogFilter
     */
    operation?: AuditLogFilterOperationEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum AuditLogFilterOperationStatusEnum {
    Success = 'SUCCESS',
    Failure = 'FAILURE'
}
/**
 * @export
 * @enum {string}
 */
export enum AuditLogFilterOriginationEnum {
    Access = 'ACCESS',
    RaProfile = 'RA_PROFILE',
    Client = 'CLIENT',
    Administrator = 'ADMINISTRATOR',
    Fe = 'FE',
    Be = 'BE',
    Ca = 'CA',
    EndEntity = 'END_ENTITY',
    EndEntityProfile = 'END_ENTITY_PROFILE',
    EndEntityCertificate = 'END_ENTITY_CERTIFICATE',
    AuditLog = 'AUDIT_LOG',
    Attributes = 'ATTRIBUTES',
    CaInstance = 'CA_INSTANCE',
    Credential = 'CREDENTIAL',
    Connector = 'CONNECTOR',
    Discovery = 'DISCOVERY',
    Health = 'HEALTH',
    Entity = 'ENTITY',
    Group = 'GROUP',
    Certificate = 'CERTIFICATE',
    Statistics = 'STATISTICS',
    AcmeProfile = 'ACME_PROFILE',
    AcmeAccount = 'ACME_ACCOUNT',
    ComplianceProfile = 'COMPLIANCE_PROFILE',
    ComplianceRule = 'COMPLIANCE_RULE',
    ComplianceGroup = 'COMPLIANCE_GROUP',
    Localhost = 'LOCALHOST'
}
/**
 * @export
 * @enum {string}
 */
export enum AuditLogFilterAffectedEnum {
    Access = 'ACCESS',
    RaProfile = 'RA_PROFILE',
    Client = 'CLIENT',
    Administrator = 'ADMINISTRATOR',
    Fe = 'FE',
    Be = 'BE',
    Ca = 'CA',
    EndEntity = 'END_ENTITY',
    EndEntityProfile = 'END_ENTITY_PROFILE',
    EndEntityCertificate = 'END_ENTITY_CERTIFICATE',
    AuditLog = 'AUDIT_LOG',
    Attributes = 'ATTRIBUTES',
    CaInstance = 'CA_INSTANCE',
    Credential = 'CREDENTIAL',
    Connector = 'CONNECTOR',
    Discovery = 'DISCOVERY',
    Health = 'HEALTH',
    Entity = 'ENTITY',
    Group = 'GROUP',
    Certificate = 'CERTIFICATE',
    Statistics = 'STATISTICS',
    AcmeProfile = 'ACME_PROFILE',
    AcmeAccount = 'ACME_ACCOUNT',
    ComplianceProfile = 'COMPLIANCE_PROFILE',
    ComplianceRule = 'COMPLIANCE_RULE',
    ComplianceGroup = 'COMPLIANCE_GROUP',
    Localhost = 'LOCALHOST'
}
/**
 * @export
 * @enum {string}
 */
export enum AuditLogFilterOperationEnum {
    Create = 'CREATE',
    Delete = 'DELETE',
    Change = 'CHANGE',
    Enable = 'ENABLE',
    Disable = 'DISABLE',
    Auth = 'AUTH',
    Request = 'REQUEST',
    Issue = 'ISSUE',
    Renew = 'RENEW',
    Revoke = 'REVOKE',
    Reset = 'RESET',
    Start = 'START',
    Stop = 'STOP',
    Validate = 'VALIDATE',
    Callback = 'CALLBACK',
    Connect = 'CONNECT',
    ForceDelete = 'FORCE_DELETE',
    Approve = 'APPROVE'
}

