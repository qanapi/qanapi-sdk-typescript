// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Revoke an API Key
   *
   * @example
   * ```ts
   * const response = await client.v2.apiKeys.revoke('apiKey');
   * ```
   */
  revoke(apiKey: string, options?: RequestOptions): APIPromise<APIKeyRevokeResponse> {
    return this._client.patch(path`/v2/api-keys/${apiKey}/revoke`, options);
  }

  /**
   * Rotate an API Key
   *
   * @example
   * ```ts
   * const response = await client.v2.apiKeys.rotate('apiKey');
   * ```
   */
  rotate(apiKey: string, options?: RequestOptions): APIPromise<APIKeyRotateResponse> {
    return this._client.patch(path`/v2/api-keys/${apiKey}/rotate`, options);
  }
}

export interface APIKeyRevokeResponse {
  message?: string;
}

export interface APIKeyRotateResponse {
  api_key?: string;

  message?: string;
}

export declare namespace APIKeys {
  export {
    type APIKeyRevokeResponse as APIKeyRevokeResponse,
    type APIKeyRotateResponse as APIKeyRotateResponse,
  };
}
