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
    CertificateComplianceResultDto,
    CertificateStatus,
    CertificateType,
    ComplianceStatus,
    GroupDto,
    LocationDto,
    MetadataResponseDto,
    ResponseAttributeDto,
    SimplifiedRaProfileDto,
} from './';

/**
 * Certificates
 * @export
 * @interface CertificateDto
 */
export interface CertificateDto {
    /**
     * UUID of the Certificate
     * @type {string}
     * @memberof CertificateDto
     */
    uuid: string;
    /**
     * Certificate common name
     * @type {string}
     * @memberof CertificateDto
     */
    commonName: string;
    /**
     * Certificate serial number
     * @type {string}
     * @memberof CertificateDto
     */
    serialNumber: string;
    /**
     * Certificate issuer common name
     * @type {string}
     * @memberof CertificateDto
     */
    issuerCommonName: string;
    /**
     * Base64 encoded Certificate content
     * @type {string}
     * @memberof CertificateDto
     */
    certificateContent: string;
    /**
     * Issuer DN of the Certificate
     * @type {string}
     * @memberof CertificateDto
     */
    issuerDn: string;
    /**
     * Subject DN of the Certificate
     * @type {string}
     * @memberof CertificateDto
     */
    subjectDn: string;
    /**
     * Certificate validity start date
     * @type {string}
     * @memberof CertificateDto
     */
    notBefore: string;
    /**
     * Certificate expiration date
     * @type {string}
     * @memberof CertificateDto
     */
    notAfter: string;
    /**
     * Public key algorithm
     * @type {string}
     * @memberof CertificateDto
     */
    publicKeyAlgorithm: string;
    /**
     * Certificate signature algorithm
     * @type {string}
     * @memberof CertificateDto
     */
    signatureAlgorithm: string;
    /**
     * Certificate key size
     * @type {number}
     * @memberof CertificateDto
     */
    keySize: number;
    /**
     * Extended key usages
     * @type {Array<string>}
     * @memberof CertificateDto
     */
    extendedKeyUsage?: Array<string>;
    /**
     * Key usages
     * @type {Array<string>}
     * @memberof CertificateDto
     */
    keyUsage: Array<string>;
    /**
     * Basic Constraints
     * @type {string}
     * @memberof CertificateDto
     */
    basicConstraints: string;
    /**
     * Certificate metadata
     * @type {Array<MetadataResponseDto>}
     * @memberof CertificateDto
     */
    metadata?: Array<MetadataResponseDto>;
    /**
     * @type {CertificateStatus}
     * @memberof CertificateDto
     */
    status: CertificateStatus;
    /**
     * @type {SimplifiedRaProfileDto}
     * @memberof CertificateDto
     */
    raProfile?: SimplifiedRaProfileDto;
    /**
     * SHA256 fingerprint of the Certificate
     * @type {string}
     * @memberof CertificateDto
     */
    fingerprint: string;
    /**
     * Subject alternative names
     * @type {{ [key: string]: object; }}
     * @memberof CertificateDto
     */
    subjectAlternativeNames?: { [key: string]: object; };
    /**
     * Locations associated to the Certificate
     * @type {Array<LocationDto>}
     * @memberof CertificateDto
     */
    locations?: Array<LocationDto>;
    /**
     * @type {GroupDto}
     * @memberof CertificateDto
     */
    group?: GroupDto;
    /**
     * Certificate Owner
     * @type {string}
     * @memberof CertificateDto
     */
    owner?: string;
    /**
     * @type {CertificateType}
     * @memberof CertificateDto
     */
    certificateType?: CertificateType;
    /**
     * Serial number of the issuer
     * @type {string}
     * @memberof CertificateDto
     */
    issuerSerialNumber?: string;
    /**
     * Certificate compliance check result
     * @type {Array<CertificateComplianceResultDto>}
     * @memberof CertificateDto
     */
    nonCompliantRules?: Array<CertificateComplianceResultDto>;
    /**
     * @type {ComplianceStatus}
     * @memberof CertificateDto
     */
    complianceStatus?: ComplianceStatus;
    /**
     * List of Custom Attributes
     * @type {Array<ResponseAttributeDto>}
     * @memberof CertificateDto
     */
    customAttributes?: Array<ResponseAttributeDto>;
}
