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
   * const response = await client.auth.login({
   *   email: 'valid@email.com',
   *   password: 'secret123',
   * });
   * ```
   */
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<AuthLoginResponse> {
    return this._client.post('/auth/login', { body, ...options });
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

export interface AuthLoginResponse {
  /**
   * JWT Bearer token
   */
  access_token?: string;

  /**
   * Token expiration in seconds
   */
  expires_in?: number;

  /**
   * Token Type
   */
  token_type?: string;
}

export interface AuthLoginParams {
  email: string;

  password: string;
}

export declare namespace Auth {
  export { type AuthLoginResponse as AuthLoginResponse, type AuthLoginParams as AuthLoginParams };
}
