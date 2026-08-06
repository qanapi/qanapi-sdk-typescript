// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V3API from './v3';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Create user
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<V3API.User> {
    return this._client.post('/v3/users', { body, ...options });
  }

  /**
   * List users
   */
  list(options?: RequestOptions): APIPromise<UserListResponse> {
    return this._client.get('/v3/users', options);
  }

  /**
   * Delete user
   */
  delete(user: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v3/users/${user}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get current user
   */
  me(options?: RequestOptions): APIPromise<V3API.User> {
    return this._client.get('/v3/users/me', options);
  }

  /**
   * Update user
   */
  patch(user: number, body: UserPatchParams, options?: RequestOptions): APIPromise<V3API.User> {
    return this._client.patch(path`/v3/users/${user}`, { body, ...options });
  }

  /**
   * Restore user
   */
  restore(user: number, options?: RequestOptions): APIPromise<V3API.User> {
    return this._client.patch(path`/v3/users/${user}/restore`, options);
  }

  /**
   * Get user
   */
  show(user: number, options?: RequestOptions): APIPromise<V3API.User> {
    return this._client.get(path`/v3/users/${user}`, options);
  }
}

export type UserListResponse = Array<V3API.User>;

export interface UserCreateParams {
  email: string;

  /**
   * Name of the role to assign
   */
  role: string;
}

export interface UserPatchParams {
  email?: string;

  name?: string;

  role?: string;

  two_factor_enabled?: boolean;
}

export declare namespace Users {
  export {
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserPatchParams as UserPatchParams,
  };
}
