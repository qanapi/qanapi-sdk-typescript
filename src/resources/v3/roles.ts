// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V3API from './v3';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Roles extends APIResource {
  /**
   * List roles
   */
  list(options?: RequestOptions): APIPromise<RoleListResponse> {
    return this._client.get('/v3/roles', options);
  }
}

export type RoleListResponse = Array<V3API.Role>;

export declare namespace Roles {
  export { type RoleListResponse as RoleListResponse };
}
