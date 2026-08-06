// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * List API Keys
   *
   * @example
   * ```ts
   * const apiKeys = await client.v3.apiKeys.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<APIKeyListResponse> {
    return this._client.get('/v3/api-keys', options);
  }

  /**
   * Revoke API Key
   *
   * @example
   * ```ts
   * await client.v3.apiKeys.revoke(0);
   * ```
   */
  revoke(apiKey: number, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v3/api-keys/${apiKey}/revoke`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Rotate API Key
   *
   * @example
   * ```ts
   * const response = await client.v3.apiKeys.rotate(0);
   * ```
   */
  rotate(apiKey: number, options?: RequestOptions): APIPromise<APIKeyRotateResponse> {
    return this._client.post(path`/v3/api-keys/${apiKey}/rotate`, options);
  }

  /**
   * Get API Key
   *
   * @example
   * ```ts
   * const response = await client.v3.apiKeys.show(0);
   * ```
   */
  show(apiKey: number, options?: RequestOptions): APIPromise<APIKeyShowResponse> {
    return this._client.get(path`/v3/api-keys/${apiKey}`, options);
  }
}

export type APIKeyListResponse = Array<APIKeyListResponse.APIKeyListResponseItem>;

export namespace APIKeyListResponse {
  export interface APIKeyListResponseItem {
    id: string;

    prefix: string;

    status: 'active' | 'revoked';

    configurations?: Array<APIKeyListResponseItem.Configuration>;

    created_at?: string;

    permissions?: Array<APIKeyListResponseItem.Permission>;

    revoked_at?: string | null;

    updated_at?: string;

    user?: APIKeyListResponseItem.User;
  }

  export namespace APIKeyListResponseItem {
    export interface Configuration {
      id: string;

      name: string;

      type: string;

      values?: Array<Configuration.Value>;
    }

    export namespace Configuration {
      export interface Value {
        key: string;

        value: string;
      }
    }

    export interface Permission {
      name: string;
    }

    export interface User {
      id: number;

      email: string;

      name: string;

      created_at?: string;

      roles?: Array<User.Role>;

      two_factor_enabled?: boolean;

      updated_at?: string;
    }

    export namespace User {
      export interface Role {
        name: string;

        description?: string | null;

        permissions?: Array<Role.Permission>;
      }

      export namespace Role {
        export interface Permission {
          name: string;
        }
      }
    }
  }
}

export interface APIKeyRotateResponse {
  key?: string;
}

export interface APIKeyShowResponse {
  id: string;

  prefix: string;

  status: 'active' | 'revoked';

  configurations?: Array<APIKeyShowResponse.Configuration>;

  created_at?: string;

  permissions?: Array<APIKeyShowResponse.Permission>;

  revoked_at?: string | null;

  updated_at?: string;

  user?: APIKeyShowResponse.User;
}

export namespace APIKeyShowResponse {
  export interface Configuration {
    id: string;

    name: string;

    type: string;

    values?: Array<Configuration.Value>;
  }

  export namespace Configuration {
    export interface Value {
      key: string;

      value: string;
    }
  }

  export interface Permission {
    name: string;
  }

  export interface User {
    id: number;

    email: string;

    name: string;

    created_at?: string;

    roles?: Array<User.Role>;

    two_factor_enabled?: boolean;

    updated_at?: string;
  }

  export namespace User {
    export interface Role {
      name: string;

      description?: string | null;

      permissions?: Array<Role.Permission>;
    }

    export namespace Role {
      export interface Permission {
        name: string;
      }
    }
  }
}

export declare namespace APIKeys {
  export {
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyRotateResponse as APIKeyRotateResponse,
    type APIKeyShowResponse as APIKeyShowResponse,
  };
}
