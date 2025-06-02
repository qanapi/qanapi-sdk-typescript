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
   * await client.auth.login({
   *   email: 'valid@email.com',
   *   password: 'secret123',
   * });
   * ```
   */
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/auth/login', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Refresh access token using refresh token
   *
   * @example
   * ```ts
   * await client.auth.refreshToken();
   * ```
   */
  refreshToken(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/auth/refresh', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve user profile and roles
   *
   * @example
   * ```ts
   * await client.auth.retrieveUserDetails();
   * ```
   */
  retrieveUserDetails(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/auth/userdetails', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Revoke the current token
   *
   * @example
   * ```ts
   * await client.auth.revokeToken();
   * ```
   */
  revokeToken(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/auth/revoke', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AuthLoginParams {
  email: string;

  password: string;
}

export declare namespace Auth {
  export { type AuthLoginParams as AuthLoginParams };
}
