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
    AuditLogDto,
} from './';

/**
 * @export
 * @interface AuditLogResponseDto
 */
export interface AuditLogResponseDto {
    /**
     * Page number
     * @type {number}
     * @memberof AuditLogResponseDto
     */
    page: number;
    /**
     * Size of the data per page
     * @type {number}
     * @memberof AuditLogResponseDto
     */
    size: number;
    /**
     * Number of pages
     * @type {number}
     * @memberof AuditLogResponseDto
     */
    totalPages: number;
    /**
     * Audit log items
     * @type {Array<AuditLogDto>}
     * @memberof AuditLogResponseDto
     */
    items: Array<AuditLogDto>;
}
