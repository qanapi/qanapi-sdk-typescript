// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class EncryptResource extends APIResource {
  /**
   * Encrypt data with optional ACL
   *
   * @example
   * ```ts
   * const response = await client.encrypt.encryptData({
   *   data: { password: 'secret' },
   *   access: { acl: ['admin'] },
   *   attributes: {
   *     classification: 'confidential',
   *     owner: 'alice@example.com',
   *     tags: ['legal'],
   *   },
   *   sensitiveFields: ['password'],
   * });
   * ```
   */
  encryptData(
    body: EncryptEncryptDataParams,
    options?: RequestOptions,
  ): APIPromise<EncryptEncryptDataResponse> {
    return this._client.post('/encrypt', { body, ...options });
  }
}

export interface Encrypt {
  /**
   * The actual data to encrypt.
   *
   * - Can be a scalar (string/number), object, or array.
   * - If the value is an object or array, only the specified `sensitiveFields` are
   *   encrypted.
   */
  data: string | number | Record<string, unknown> | Array<unknown>;

  access?: Encrypt.Access;

  /**
   * Optional metadata describing the data's context.
   */
  attributes?: Encrypt.Attributes;

  /**
   * Laravel-style dot-notated paths to fields that should be encrypted.
   *
   * Supports:
   *
   * - Dot notation for nested fields: `user.profile.ssn`
   * - Wildcard `*` for arrays or dynamic keys: `users.*.token`
   *
   * Examples:
   *
   * - `password`
   * - `user.credentials.secret`
   * - `accounts.*.secret`
   * - `teams.*.members.*.email`
   */
  sensitiveFields?: Array<string>;
}

export namespace Encrypt {
  export interface Access {
    /**
     * Access control list — list of user roles authorized to decrypt this data.
     */
    acl?: Array<string>;
  }

  /**
   * Optional metadata describing the data's context.
   */
  export interface Attributes {
    classification?: 'public' | 'internal' | 'confidential' | 'restricted';

    owner?: string;

    tags?: Array<string>;
  }
}

/**
 * The actual data to encrypt.
 *
 * - Can be a scalar (string/number), object, or array.
 * - If the value is an object or array, only the specified `sensitiveFields` are
 *   encrypted.
 */
export type EncryptEncryptDataResponse = string | number | Record<string, unknown> | Array<unknown>;

export interface EncryptEncryptDataParams {
  /**
   * The actual data to encrypt.
   *
   * - Can be a scalar (string/number), object, or array.
   * - If the value is an object or array, only the specified `sensitiveFields` are
   *   encrypted.
   */
  data: string | number | Record<string, unknown> | Array<unknown>;

  access?: EncryptEncryptDataParams.Access;

  /**
   * Optional metadata describing the data's context.
   */
  attributes?: EncryptEncryptDataParams.Attributes;

  /**
   * Laravel-style dot-notated paths to fields that should be encrypted.
   *
   * Supports:
   *
   * - Dot notation for nested fields: `user.profile.ssn`
   * - Wildcard `*` for arrays or dynamic keys: `users.*.token`
   *
   * Examples:
   *
   * - `password`
   * - `user.credentials.secret`
   * - `accounts.*.secret`
   * - `teams.*.members.*.email`
   */
  sensitiveFields?: Array<string>;
}

export namespace EncryptEncryptDataParams {
  export interface Access {
    /**
     * Access control list — list of user roles authorized to decrypt this data.
     */
    acl?: Array<string>;
  }

  /**
   * Optional metadata describing the data's context.
   */
  export interface Attributes {
    classification?: 'public' | 'internal' | 'confidential' | 'restricted';

    owner?: string;

    tags?: Array<string>;
  }
}

export declare namespace EncryptResource {
  export {
    type Encrypt as Encrypt,
    type EncryptEncryptDataResponse as EncryptEncryptDataResponse,
    type EncryptEncryptDataParams as EncryptEncryptDataParams,
  };
}
