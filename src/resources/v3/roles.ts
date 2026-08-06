// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Roles extends APIResource {
  /**
   * List roles
   *
   * @example
   * ```ts
   * const roles = await client.v3.roles.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<RoleListResponse> {
    return this._client.get('/v3/roles', options);
  }
}

export type RoleListResponse = Array<RoleListResponse.RoleListResponseItem>;

export namespace RoleListResponse {
  export interface RoleListResponseItem {
    name: string;

    description?: string | null;

    permissions?: Array<RoleListResponseItem.Permission>;
  }

  export namespace RoleListResponseItem {
    export interface Permission {
      name: string;
    }
  }
}

export declare namespace Roles {
  export { type RoleListResponse as RoleListResponse };
}
