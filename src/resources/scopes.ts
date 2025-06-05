// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Scopes extends APIResource {
  /**
   * Create a new scope
   *
   * @example
   * ```ts
   * const scope = await client.scopes.create({
   *   name: 'read:secrets',
   *   route: 'decrypt',
   * });
   * ```
   */
  create(body: ScopeCreateParams, options?: RequestOptions): APIPromise<ScopeCreateResponse> {
    return this._client.post('/scopes', { body, ...options });
  }

  /**
   * Get a specific scope
   *
   * @example
   * ```ts
   * const scope = await client.scopes.retrieve(0);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<ScopeRetrieveResponse> {
    return this._client.get(path`/scopes/${id}`, options);
  }

  /**
   * Update a scope
   *
   * @example
   * ```ts
   * await client.scopes.update(0);
   * ```
   */
  update(id: number, body: ScopeUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/scopes/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List all scopes
   *
   * @example
   * ```ts
   * const scopes = await client.scopes.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ScopeListResponse> {
    return this._client.get('/scopes', options);
  }

  /**
   * Delete a scope
   *
   * @example
   * ```ts
   * await client.scopes.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/scopes/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ScopeCreateResponse {
  id?: number;

  created_at?: string;

  name?: string;

  route?: string;

  updated_at?: string;
}

export interface ScopeRetrieveResponse {
  id?: number;

  created_at?: string;

  name?: string;

  route?: string;

  updated_at?: string;
}

export type ScopeListResponse = Array<ScopeListResponse.ScopeListResponseItem>;

export namespace ScopeListResponse {
  export interface ScopeListResponseItem {
    id?: number;

    created_at?: string;

    name?: string;

    route?: string;

    updated_at?: string;
  }
}

export interface ScopeCreateParams {
  name: string;

  route: string;
}

export interface ScopeUpdateParams {
  name?: string;

  route?: string;
}

export declare namespace Scopes {
  export {
    type ScopeCreateResponse as ScopeCreateResponse,
    type ScopeRetrieveResponse as ScopeRetrieveResponse,
    type ScopeListResponse as ScopeListResponse,
    type ScopeCreateParams as ScopeCreateParams,
    type ScopeUpdateParams as ScopeUpdateParams,
  };
}
