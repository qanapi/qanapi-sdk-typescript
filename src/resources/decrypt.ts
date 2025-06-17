// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DecryptResource extends APIResource {
  /**
   * Decrypt encrypted payload
   *
   * @example
   * ```ts
   * const response = await client.decrypt.decryptPayload({
   *   data: { password: 'enc$::abc123::...' },
   *   sensitiveFields: ['password'],
   * });
   * ```
   */
  decryptPayload(
    body: DecryptDecryptPayloadParams,
    options?: RequestOptions,
  ): APIPromise<DecryptDecryptPayloadResponse> {
    return this._client.post('/decrypt', { body, ...options });
  }
}

export interface Decrypt {
  /**
   * The encrypted payload to decrypt.
   *
   * - Can be a string or an object/array with encrypted fields.
   * - Decryption is selective if `sensitiveFields` is provided.
   */
  data: string | Record<string, unknown> | Array<unknown>;

  /**
   * Laravel-style dot-notated paths to fields to decrypt.
   *
   * - Same syntax and behavior as in EncryptRequest.
   * - If omitted, all string values matching encryption prefix are attempted.
   *
   * Examples:
   *
   * - `user.ssn`
   * - `employees.*.payroll.token`
   */
  sensitiveFields?: Array<string>;
}

/**
 * The encrypted payload to decrypt.
 *
 * - Can be a string or an object/array with encrypted fields.
 * - Decryption is selective if `sensitiveFields` is provided.
 */
export type DecryptDecryptPayloadResponse = string | Record<string, unknown> | Array<unknown>;

export interface DecryptDecryptPayloadParams {
  /**
   * The encrypted payload to decrypt.
   *
   * - Can be a string or an object/array with encrypted fields.
   * - Decryption is selective if `sensitiveFields` is provided.
   */
  data: string | Record<string, unknown> | Array<unknown>;

  /**
   * Laravel-style dot-notated paths to fields to decrypt.
   *
   * - Same syntax and behavior as in EncryptRequest.
   * - If omitted, all string values matching encryption prefix are attempted.
   *
   * Examples:
   *
   * - `user.ssn`
   * - `employees.*.payroll.token`
   */
  sensitiveFields?: Array<string>;
}

export declare namespace DecryptResource {
  export {
    type Decrypt as Decrypt,
    type DecryptDecryptPayloadResponse as DecryptDecryptPayloadResponse,
    type DecryptDecryptPayloadParams as DecryptDecryptPayloadParams,
  };
}
