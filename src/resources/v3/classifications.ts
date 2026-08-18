// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V3API from './v3';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Classifications extends APIResource {
  /**
   * Create classification
   *
   * @example
   * ```ts
   * const classification =
   *   await client.v3.classifications.create({
   *     bg_color: '#e1cb97',
   *     fg_color: '#e1cb97',
   *     name: 'name',
   *   });
   * ```
   */
  create(
    body: ClassificationCreateParams,
    options?: RequestOptions,
  ): APIPromise<ClassificationCreateResponse> {
    return this._client.post('/v3/classifications', { body, ...options });
  }

  /**
   * Update classification
   *
   * @example
   * ```ts
   * const classification =
   *   await client.v3.classifications.update(0, {
   *     bg_color: '#e1cb97',
   *     fg_color: '#e1cb97',
   *     name: 'name',
   *   });
   * ```
   */
  update(
    classification: number,
    body: ClassificationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ClassificationUpdateResponse> {
    return this._client.patch(path`/v3/classifications/${classification}`, { body, ...options });
  }

  /**
   * List classifications
   *
   * @example
   * ```ts
   * const classifications =
   *   await client.v3.classifications.list();
   * ```
   */
  list(
    query: ClassificationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ClassificationListResponse> {
    return this._client.get('/v3/classifications', { query, ...options });
  }

  /**
   * Delete classification
   *
   * @example
   * ```ts
   * await client.v3.classifications.delete(0);
   * ```
   */
  delete(classification: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v3/classifications/${classification}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get classification
   *
   * @example
   * ```ts
   * const response = await client.v3.classifications.show(0);
   * ```
   */
  show(classification: number, options?: RequestOptions): APIPromise<ClassificationShowResponse> {
    return this._client.get(path`/v3/classifications/${classification}`, options);
  }
}

export interface ClassificationCreateResponse {
  id: number;

  bg_color: string;

  fg_color: string;

  name: string;

  slug: string;

  description?: string | null;

  emoji?: string | null;

  providers?: Array<ClassificationCreateResponse.Provider>;

  roles?: Array<V3API.Role>;

  users?: Array<V3API.User>;
}

export namespace ClassificationCreateResponse {
  export interface Provider {
    gws_groups?: Array<V3API.GoogleGroup>;

    name?: string;

    uuid?: string;
  }
}

export interface ClassificationUpdateResponse {
  id: number;

  bg_color: string;

  fg_color: string;

  name: string;

  slug: string;

  description?: string | null;

  emoji?: string | null;

  providers?: Array<ClassificationUpdateResponse.Provider>;

  roles?: Array<V3API.Role>;

  users?: Array<V3API.User>;
}

export namespace ClassificationUpdateResponse {
  export interface Provider {
    gws_groups?: Array<V3API.GoogleGroup>;

    name?: string;

    uuid?: string;
  }
}

export interface ClassificationListResponse {
  current_page?: number;

  data?: Array<ClassificationListResponse.Data>;

  first_page_url?: string;

  from?: number | null;

  last_page?: number;

  last_page_url?: string;

  links?: Array<ClassificationListResponse.Link>;

  next_page_url?: string | null;

  path?: string;

  per_page?: number;

  prev_page_url?: string | null;

  to?: number | null;

  total?: number;
}

export namespace ClassificationListResponse {
  export interface Data {
    id: number;

    bg_color: string;

    fg_color: string;

    name: string;

    slug: string;

    description?: string | null;

    emoji?: string | null;

    providers?: Array<Data.Provider>;

    roles?: Array<V3API.Role>;

    users?: Array<V3API.User>;
  }

  export namespace Data {
    export interface Provider {
      gws_groups?: Array<V3API.GoogleGroup>;

      name?: string;

      uuid?: string;
    }
  }

  export interface Link {
    active?: boolean;

    label?: string;

    page?: number | null;

    url?: string | null;
  }
}

export interface ClassificationShowResponse {
  id: number;

  bg_color: string;

  fg_color: string;

  name: string;

  slug: string;

  description?: string | null;

  emoji?: string | null;

  providers?: Array<ClassificationShowResponse.Provider>;

  roles?: Array<V3API.Role>;

  users?: Array<V3API.User>;
}

export namespace ClassificationShowResponse {
  export interface Provider {
    gws_groups?: Array<V3API.GoogleGroup>;

    name?: string;

    uuid?: string;
  }
}

export interface ClassificationCreateParams {
  bg_color: string;

  fg_color: string;

  name: string;

  description?: string | null;

  emoji?: string | null;

  gws_groups?: Array<V3API.GoogleGroup>;

  /**
   * Required if gws_groups is provided.
   */
  provider_container_id?: number;

  /**
   * Array of role IDs.
   */
  roles?: Array<number>;

  /**
   * Array of user IDs.
   */
  users?: Array<number>;
}

export interface ClassificationUpdateParams {
  bg_color: string;

  fg_color: string;

  name: string;

  description?: string | null;

  emoji?: string | null;

  gws_groups?: Array<V3API.GoogleGroup>;

  /**
   * Required if gws_groups is provided.
   */
  provider_container_id?: number;

  /**
   * Array of role IDs.
   */
  roles?: Array<number>;

  /**
   * Array of user IDs.
   */
  users?: Array<number>;
}

export interface ClassificationListParams {
  direction?: 'asc' | 'desc';

  per_page?: number;

  providers?: Array<number>;

  roles?: Array<number>;

  search?: string;

  sort?: string;

  user?: number;
}

export declare namespace Classifications {
  export {
    type ClassificationCreateResponse as ClassificationCreateResponse,
    type ClassificationUpdateResponse as ClassificationUpdateResponse,
    type ClassificationListResponse as ClassificationListResponse,
    type ClassificationShowResponse as ClassificationShowResponse,
    type ClassificationCreateParams as ClassificationCreateParams,
    type ClassificationUpdateParams as ClassificationUpdateParams,
    type ClassificationListParams as ClassificationListParams,
  };
}
