// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Scopes extends APIResource {
  /**
   * Retrieve scopes associated with an API Key
   *
   * @example
   * ```ts
   * const scopes = await client.apiKeys.scopes.retrieve(0);
   * ```
   */
  retrieve(apiKey: number, options?: RequestOptions): APIPromise<ScopeRetrieveResponse> {
    return this._client.get(path`/api-keys/${apiKey}/scopes`, options);
  }

  /**
   * Attach scopes to an API Key
   *
   * @example
   * ```ts
   * await client.apiKeys.scopes.attach(0, { scope_ids: [25] });
   * ```
   */
  attach(apiKey: number, body: ScopeAttachParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api-keys/${apiKey}/scopes/attach`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Detach scopes from an API Key
   *
   * @example
   * ```ts
   * await client.apiKeys.scopes.detach(0, { scope_ids: [1] });
   * ```
   */
  detach(apiKey: number, body: ScopeDetachParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api-keys/${apiKey}/scopes/detach`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ScopeRetrieveResponse = Array<ScopeRetrieveResponse.ScopeRetrieveResponseItem>;

export namespace ScopeRetrieveResponse {
  export interface ScopeRetrieveResponseItem {
    id?: number;

    name?: string;

    route?: string;
  }
}

export interface ScopeAttachParams {
  /**
   * List of scope IDs to attach
   */
  scope_ids: Array<number>;
}

export interface ScopeDetachParams {
  /**
   * List of scope IDs to detach
   */
  scope_ids: Array<number>;
}

export declare namespace Scopes {
  export {
    type ScopeRetrieveResponse as ScopeRetrieveResponse,
    type ScopeAttachParams as ScopeAttachParams,
    type ScopeDetachParams as ScopeDetachParams,
  };
}
