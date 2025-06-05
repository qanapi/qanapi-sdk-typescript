// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
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
   * const response = await client.auth.refreshToken();
   * ```
   */
  refreshToken(options?: RequestOptions): APIPromise<AuthRefreshTokenResponse> {
    return this._client.post('/auth/refresh', options);
  }

  /**
   * Retrieve user profile and roles
   *
   * @example
   * ```ts
   * const response = await client.auth.retrieveUserDetails();
   * ```
   */
  retrieveUserDetails(options?: RequestOptions): APIPromise<AuthRetrieveUserDetailsResponse> {
    return this._client.get('/auth/userdetails', options);
  }

  /**
   * Revoke the current token
   *
   * @example
   * ```ts
   * const response = await client.auth.revokeToken();
   * ```
   */
  revokeToken(options?: RequestOptions): APIPromise<AuthRevokeTokenResponse> {
    return this._client.post('/auth/revoke', options);
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

export interface AuthRetrieveUserDetailsResponse {
  id?: number;

  email?: string;

  email_verified_at?: string | null;

  first_login?: number;

  gravatar_url?: string;

  name?: string;

  roles?: Array<string>;
}

export interface AuthRevokeTokenResponse {
  message?: string;
}

export interface AuthLoginParams {
  email: string;

  password: string;
}

export declare namespace Auth {
  export {
    type AuthLoginResponse as AuthLoginResponse,
    type AuthRefreshTokenResponse as AuthRefreshTokenResponse,
    type AuthRetrieveUserDetailsResponse as AuthRetrieveUserDetailsResponse,
    type AuthRevokeTokenResponse as AuthRevokeTokenResponse,
    type AuthLoginParams as AuthLoginParams,
  };
}
