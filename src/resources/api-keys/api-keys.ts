// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScopesAPI from './scopes';
import {
  ScopeAttachParams,
  ScopeAttachResponse,
  ScopeDetachParams,
  ScopeDetachResponse,
  ScopeRetrieveResponse,
  ScopeSyncParams,
  ScopeSyncResponse,
  Scopes,
} from './scopes';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  scopes: ScopesAPI.Scopes = new ScopesAPI.Scopes(this._client);

  /**
   * Revoke an API Key
   *
   * @example
   * ```ts
   * const response = await client.apiKeys.revoke('apiKey');
   * ```
   */
  revoke(apiKey: string, options?: RequestOptions): APIPromise<APIKeyRevokeResponse> {
    return this._client.patch(path`/api-keys/${apiKey}/revoke`, options);
  }

  /**
   * Rotate an API Key
   *
   * @example
   * ```ts
   * const response = await client.apiKeys.rotate('apiKey');
   * ```
   */
  rotate(apiKey: string, options?: RequestOptions): APIPromise<APIKeyRotateResponse> {
    return this._client.patch(path`/api-keys/${apiKey}/rotate`, options);
  }
}

export interface APIKeyRevokeResponse {
  message?: string;
}

export interface APIKeyRotateResponse {
  api_key?: string;

  message?: string;
}

APIKeys.Scopes = Scopes;

export declare namespace APIKeys {
  export {
    type APIKeyRevokeResponse as APIKeyRevokeResponse,
    type APIKeyRotateResponse as APIKeyRotateResponse,
  };

  export {
    Scopes as Scopes,
    type ScopeRetrieveResponse as ScopeRetrieveResponse,
    type ScopeAttachResponse as ScopeAttachResponse,
    type ScopeDetachResponse as ScopeDetachResponse,
    type ScopeSyncResponse as ScopeSyncResponse,
    type ScopeAttachParams as ScopeAttachParams,
    type ScopeDetachParams as ScopeDetachParams,
    type ScopeSyncParams as ScopeSyncParams,
  };
}
