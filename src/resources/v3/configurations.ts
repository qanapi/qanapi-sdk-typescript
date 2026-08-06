// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Configurations extends APIResource {
  /**
   * Create configuration
   *
   * @example
   * ```ts
   * const configuration = await client.v3.configurations.create(
   *   { name: 'name', type: 'provider' },
   * );
   * ```
   */
  create(body: ConfigurationCreateParams, options?: RequestOptions): APIPromise<ConfigurationCreateResponse> {
    return this._client.post('/v3/configurations', { body, ...options });
  }

  /**
   * Update configuration
   *
   * @example
   * ```ts
   * const configuration = await client.v3.configurations.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { name: 'name' },
   * );
   * ```
   */
  update(
    configuration: string,
    body: ConfigurationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConfigurationUpdateResponse> {
    return this._client.put(path`/v3/configurations/${configuration}`, { body, ...options });
  }

  /**
   * List configurations
   *
   * @example
   * ```ts
   * const configurations =
   *   await client.v3.configurations.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ConfigurationListResponse> {
    return this._client.get('/v3/configurations', options);
  }

  /**
   * Delete configuration
   *
   * @example
   * ```ts
   * await client.v3.configurations.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(configuration: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v3/configurations/${configuration}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get configuration
   *
   * @example
   * ```ts
   * const response = await client.v3.configurations.show(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  show(configuration: string, options?: RequestOptions): APIPromise<ConfigurationShowResponse> {
    return this._client.get(path`/v3/configurations/${configuration}`, options);
  }
}

export interface ConfigurationCreateResponse {
  id: string;

  name: string;

  type: string;

  values?: Array<ConfigurationCreateResponse.Value>;
}

export namespace ConfigurationCreateResponse {
  export interface Value {
    key: string;

    value: string;
  }
}

export interface ConfigurationUpdateResponse {
  id: string;

  name: string;

  type: string;

  values?: Array<ConfigurationUpdateResponse.Value>;
}

export namespace ConfigurationUpdateResponse {
  export interface Value {
    key: string;

    value: string;
  }
}

export type ConfigurationListResponse = Array<ConfigurationListResponse.ConfigurationListResponseItem>;

export namespace ConfigurationListResponse {
  export interface ConfigurationListResponseItem {
    id: string;

    name: string;

    type: string;

    values?: Array<ConfigurationListResponseItem.Value>;
  }

  export namespace ConfigurationListResponseItem {
    export interface Value {
      key: string;

      value: string;
    }
  }
}

export interface ConfigurationShowResponse {
  id: string;

  name: string;

  type: string;

  values?: Array<ConfigurationShowResponse.Value>;
}

export namespace ConfigurationShowResponse {
  export interface Value {
    key: string;

    value: string;
  }
}

export interface ConfigurationCreateParams {
  name: string;

  type: 'provider' | 'encryption';

  /**
   * Required if type is 'provider'
   */
  provider?: 'google';
}

export interface ConfigurationUpdateParams {
  name: string;
}

export declare namespace Configurations {
  export {
    type ConfigurationCreateResponse as ConfigurationCreateResponse,
    type ConfigurationUpdateResponse as ConfigurationUpdateResponse,
    type ConfigurationListResponse as ConfigurationListResponse,
    type ConfigurationShowResponse as ConfigurationShowResponse,
    type ConfigurationCreateParams as ConfigurationCreateParams,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
  };
}
