// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  /**
   * Login
   *
   * @example
   * ```ts
   * const response = await client.v2.auth.login({
   *   email: 'valid@email.com',
   *   password: 'secret1234',
   * });
   * ```
   */
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<AuthLoginResponse> {
    return this._client.post('/v2/auth/login', { body, ...options });
  }

  /**
   * Logout
   *
   * @example
   * ```ts
   * const response = await client.v2.auth.logout();
   * ```
   */
  logout(options?: RequestOptions): APIPromise<AuthLogoutResponse> {
    return this._client.post('/v2/auth/logout', options);
  }

  /**
   * Refresh token
   *
   * @example
   * ```ts
   * const response = await client.v2.auth.refreshToken();
   * ```
   */
  refreshToken(options?: RequestOptions): APIPromise<AuthRefreshTokenResponse> {
    return this._client.post('/v2/auth/refresh', options);
  }

  /**
   * Revoke token
   *
   * @example
   * ```ts
   * const response = await client.v2.auth.revokeToken();
   * ```
   */
  revokeToken(options?: RequestOptions): APIPromise<AuthRevokeTokenResponse> {
    return this._client.post('/v2/auth/revoke', options);
  }

  /**
   * Get user details
   *
   * @example
   * ```ts
   * const response = await client.v2.auth.userDetails();
   * ```
   */
  userDetails(options?: RequestOptions): APIPromise<AuthUserDetailsResponse> {
    return this._client.get('/v2/auth/userdetails', options);
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

export interface AuthLogoutResponse {
  message?: string;

  user?: string;
}

export interface AuthRefreshTokenResponse {
  /**
   * JWT access token
   */
  access_token?: string;

  /**
   * Token expiration time in seconds
   */
  expires_in?: number;

  token_type?: string;
}

export interface AuthRevokeTokenResponse {
  message?: string;
}

export interface AuthUserDetailsResponse {
  id?: number;

  email?: string;

  email_verified_at?: string | null;

  first_login?: number;

  gravatar_url?: string;

  name?: string;

  roles?: Array<string>;
}

export interface AuthLoginParams {
  email: string;

  password: string;
}

export declare namespace Auth {
  export {
    type AuthLoginResponse as AuthLoginResponse,
    type AuthLogoutResponse as AuthLogoutResponse,
    type AuthRefreshTokenResponse as AuthRefreshTokenResponse,
    type AuthRevokeTokenResponse as AuthRevokeTokenResponse,
    type AuthUserDetailsResponse as AuthUserDetailsResponse,
    type AuthLoginParams as AuthLoginParams,
  };
}
