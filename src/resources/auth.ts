// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  /**
   * Authenticate user and return JWT
   *
   * @example
   * ```ts
   * await client.auth.login({ body: {} });
   * ```
   */
  login(params: AuthLoginParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/auth/login', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Refresh access token using refresh token
   */
  refreshToken(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/auth/refresh', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve user profile and roles
   */
  retrieveUserDetails(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/auth/userdetails', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Revoke the current token
   */
  revokeToken(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/auth/revoke', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AuthLoginParams {
  body: unknown;
}

export declare namespace Auth {
  export { type AuthLoginParams as AuthLoginParams };
}
