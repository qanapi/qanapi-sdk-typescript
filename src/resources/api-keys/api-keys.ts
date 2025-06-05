// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScopesAPI from './scopes';
import { ScopeAttachParams, ScopeDetachParams, ScopeRetrieveResponse, Scopes } from './scopes';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  scopes: ScopesAPI.Scopes = new ScopesAPI.Scopes(this._client);

  /**
   * Revoke an API Key
   *
   * @example
   * ```ts
   * await client.apiKeys.revoke('apiKey');
   * ```
   */
  revoke(apiKey: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/api-keys/${apiKey}/revoke`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Rotate an API Key
   *
   * @example
   * ```ts
   * await client.apiKeys.rotate('apiKey');
   * ```
   */
  rotate(apiKey: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/api-keys/${apiKey}/rotate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

APIKeys.Scopes = Scopes;

export declare namespace APIKeys {
  export {
    Scopes as Scopes,
    type ScopeRetrieveResponse as ScopeRetrieveResponse,
    type ScopeAttachParams as ScopeAttachParams,
    type ScopeDetachParams as ScopeDetachParams,
  };
}
