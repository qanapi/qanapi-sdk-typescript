// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Create user
   *
   * @example
   * ```ts
   * const user = await client.v3.users.create({
   *   email: 'dev@stainless.com',
   *   role: 'role',
   * });
   * ```
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    return this._client.post('/v3/users', { body, ...options });
  }

  /**
   * List users
   *
   * @example
   * ```ts
   * const users = await client.v3.users.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<UserListResponse> {
    return this._client.get('/v3/users', options);
  }

  /**
   * Delete user
   *
   * @example
   * ```ts
   * await client.v3.users.delete(0);
   * ```
   */
  delete(user: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v3/users/${user}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get current user
   *
   * @example
   * ```ts
   * const response = await client.v3.users.me();
   * ```
   */
  me(options?: RequestOptions): APIPromise<UserMeResponse> {
    return this._client.get('/v3/users/me', options);
  }

  /**
   * Update user
   *
   * @example
   * ```ts
   * const response = await client.v3.users.patch(0);
   * ```
   */
  patch(user: number, body: UserPatchParams, options?: RequestOptions): APIPromise<UserPatchResponse> {
    return this._client.patch(path`/v3/users/${user}`, { body, ...options });
  }

  /**
   * Update user
   *
   * @example
   * ```ts
   * const response = await client.v3.users.restore(0);
   * ```
   */
  restore(user: number, body: UserRestoreParams, options?: RequestOptions): APIPromise<UserRestoreResponse> {
    return this._client.patch(path`/v3/users/${user}`, { body, ...options });
  }

  /**
   * Get user
   *
   * @example
   * ```ts
   * const response = await client.v3.users.show(0);
   * ```
   */
  show(user: number, options?: RequestOptions): APIPromise<UserShowResponse> {
    return this._client.get(path`/v3/users/${user}`, options);
  }
}

export interface UserCreateResponse {
  id: number;

  email: string;

  name: string;

  created_at?: string;

  roles?: Array<UserCreateResponse.Role>;

  two_factor_enabled?: boolean;

  updated_at?: string;
}

export namespace UserCreateResponse {
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

export type UserListResponse = Array<UserListResponse.UserListResponseItem>;

export namespace UserListResponse {
  export interface UserListResponseItem {
    id: number;

    email: string;

    name: string;

    created_at?: string;

    roles?: Array<UserListResponseItem.Role>;

    two_factor_enabled?: boolean;

    updated_at?: string;
  }

  export namespace UserListResponseItem {
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

export interface UserMeResponse {
  id: number;

  email: string;

  name: string;

  created_at?: string;

  roles?: Array<UserMeResponse.Role>;

  two_factor_enabled?: boolean;

  updated_at?: string;
}

export namespace UserMeResponse {
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

export interface UserPatchResponse {
  id: number;

  email: string;

  name: string;

  created_at?: string;

  roles?: Array<UserPatchResponse.Role>;

  two_factor_enabled?: boolean;

  updated_at?: string;
}

export namespace UserPatchResponse {
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

export interface UserRestoreResponse {
  id: number;

  email: string;

  name: string;

  created_at?: string;

  roles?: Array<UserRestoreResponse.Role>;

  two_factor_enabled?: boolean;

  updated_at?: string;
}

export namespace UserRestoreResponse {
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

export interface UserShowResponse {
  id: number;

  email: string;

  name: string;

  created_at?: string;

  roles?: Array<UserShowResponse.Role>;

  two_factor_enabled?: boolean;

  updated_at?: string;
}

export namespace UserShowResponse {
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

export interface UserRestoreParams {
  email?: string;

  name?: string;

  role?: string;

  two_factor_enabled?: boolean;
}

export declare namespace Users {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserListResponse as UserListResponse,
    type UserMeResponse as UserMeResponse,
    type UserPatchResponse as UserPatchResponse,
    type UserRestoreResponse as UserRestoreResponse,
    type UserShowResponse as UserShowResponse,
    type UserCreateParams as UserCreateParams,
    type UserPatchParams as UserPatchParams,
    type UserRestoreParams as UserRestoreParams,
  };
}
