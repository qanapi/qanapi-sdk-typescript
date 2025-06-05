// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
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
   * const response = await client.apiKeys.scopes.attach(0, {
   *   scope_ids: [25],
   * });
   * ```
   */
  attach(apiKey: number, body: ScopeAttachParams, options?: RequestOptions): APIPromise<ScopeAttachResponse> {
    return this._client.post(path`/api-keys/${apiKey}/scopes/attach`, { body, ...options });
  }

  /**
   * Detach scopes from an API Key
   *
   * @example
   * ```ts
   * const response = await client.apiKeys.scopes.detach(0, {
   *   scope_ids: [1],
   * });
   * ```
   */
  detach(apiKey: number, body: ScopeDetachParams, options?: RequestOptions): APIPromise<ScopeDetachResponse> {
    return this._client.post(path`/api-keys/${apiKey}/scopes/detach`, { body, ...options });
  }

  /**
   * Sync scopes of an API Key
   *
   * @example
   * ```ts
   * const response = await client.apiKeys.scopes.sync(0, {
   *   scope_ids: [25],
   * });
   * ```
   */
  sync(apiKey: number, body: ScopeSyncParams, options?: RequestOptions): APIPromise<ScopeSyncResponse> {
    return this._client.post(path`/api-keys/${apiKey}/scopes/sync`, { body, ...options });
  }
}

export type ScopeRetrieveResponse = Array<ScopeRetrieveResponse.ScopeRetrieveResponseItem>;

export namespace ScopeRetrieveResponse {
  export interface ScopeRetrieveResponseItem {
    id?: number;

    created_at?: string;

    name?: string;

    pivot?: ScopeRetrieveResponseItem.Pivot;

    route?: string;

    updated_at?: string;
  }

  export namespace ScopeRetrieveResponseItem {
    export interface Pivot {
      api_key_id?: number;

      scope_id?: number;
    }
  }
}

export interface ScopeAttachResponse {
  message?: string;
}

export interface ScopeDetachResponse {
  message?: string;
}

export interface ScopeSyncResponse {
  message?: string;
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

export interface ScopeSyncParams {
  /**
   * List of scope IDs to sync
   */
  scope_ids: Array<number>;
}

export declare namespace Scopes {
  export {
    type ScopeRetrieveResponse as ScopeRetrieveResponse,
    type ScopeAttachResponse as ScopeAttachResponse,
    type ScopeDetachResponse as ScopeDetachResponse,
    type ScopeSyncResponse as ScopeSyncResponse,
    type ScopeAttachParams as ScopeAttachParams,
    type ScopeDetachParams as ScopeDetachParams,
    type ScopeSyncParams as ScopeSyncParams,
  };
}
