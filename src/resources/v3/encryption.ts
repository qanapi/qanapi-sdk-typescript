// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Encryption extends APIResource {
  /**
   * Decrypt data
   */
  decrypt(
    proxy: string,
    params: EncryptionDecryptParams,
    options?: RequestOptions,
  ): APIPromise<EncryptionDecryptResponse> {
    const { data, 'x-qanapi-fields': xQanapiFields } = params;
    return this._client.post(path`/v3/encryption/${proxy}/decrypt`, {
      body: data,
      ...options,
      headers: buildHeaders([{ 'x-qanapi-fields': xQanapiFields }, options?.headers]),
    });
  }

  /**
   * Encrypt data
   */
  encrypt(
    proxy: string,
    params: EncryptionEncryptParams,
    options?: RequestOptions,
  ): APIPromise<EncryptionEncryptResponse> {
    const { data, 'x-qanapi-fields': xQanapiFields, 'x-qanapi-destination': xQanapiDestination } = params;
    return this._client.post(path`/v3/encryption/${proxy}/encrypt`, {
      body: data,
      ...options,
      headers: buildHeaders([
        {
          'x-qanapi-fields': xQanapiFields,
          ...(xQanapiDestination != null ? { 'x-qanapi-destination': xQanapiDestination } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type EncryptionDecryptResponse = { [key: string]: unknown };

export type EncryptionEncryptResponse = { [key: string]: unknown };

export interface EncryptionDecryptParams {
  /**
   * Body param: A JSON object to decrypt fields on. A maximum depth of 32 is
   * allowed.
   */
  data: { [key: string]: unknown };

  /**
   * Header param: Comma separated list of fields to decrypt. You can use dot
   * notation to access nested fields.
   */
  'x-qanapi-fields': string;
}

export interface EncryptionEncryptParams {
  /**
   * Body param: A JSON object to encrypt fields on. A maximum depth of 32 is
   * allowed.
   */
  data: { [key: string]: unknown };

  /**
   * Header param: Comma separated list of fields to encrypt. You can use dot
   * notation to access nested fields.
   */
  'x-qanapi-fields': string;

  /**
   * Header param: A URL to forward the encrypted data to. All non-qanapi headers
   * will be forwarded to the destination.
   */
  'x-qanapi-destination'?: string;
}

export declare namespace Encryption {
  export {
    type EncryptionDecryptResponse as EncryptionDecryptResponse,
    type EncryptionEncryptResponse as EncryptionEncryptResponse,
    type EncryptionDecryptParams as EncryptionDecryptParams,
    type EncryptionEncryptParams as EncryptionEncryptParams,
  };
}
