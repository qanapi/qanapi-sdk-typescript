// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V3API from './v3';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * List API Keys
   *
   * @example
   * ```ts
   * const apiKeys = await client.v3.apiKeys.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<APIKeyListResponse> {
    return this._client.get('/v3/api-keys', options);
  }

  /**
   * Revoke API Key
   *
   * @example
   * ```ts
   * await client.v3.apiKeys.revoke(0);
   * ```
   */
  revoke(apiKey: number, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v3/api-keys/${apiKey}/revoke`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Rotate API Key
   *
   * @example
   * ```ts
   * const response = await client.v3.apiKeys.rotate(0);
   * ```
   */
  rotate(apiKey: number, options?: RequestOptions): APIPromise<APIKeyRotateResponse> {
    return this._client.post(path`/v3/api-keys/${apiKey}/rotate`, options);
  }

  /**
   * Get API Key
   *
   * @example
   * ```ts
   * const apiKey = await client.v3.apiKeys.show(0);
   * ```
   */
  show(apiKey: number, options?: RequestOptions): APIPromise<V3API.APIKey> {
    return this._client.get(path`/v3/api-keys/${apiKey}`, options);
  }
}

export type APIKeyListResponse = Array<V3API.APIKey>;

export interface APIKeyRotateResponse {
  key?: string;
}

export declare namespace APIKeys {
  export { type APIKeyListResponse as APIKeyListResponse, type APIKeyRotateResponse as APIKeyRotateResponse };
}
