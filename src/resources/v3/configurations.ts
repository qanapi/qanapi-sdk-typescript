// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V3API from './v3';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Configurations extends APIResource {
  /**
   * Create configuration
   */
  create(body: ConfigurationCreateParams, options?: RequestOptions): APIPromise<V3API.Configuration> {
    return this._client.post('/v3/configurations', { body, ...options });
  }

  /**
   * Update configuration
   */
  update(
    configuration: string,
    body: ConfigurationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<V3API.Configuration> {
    return this._client.put(path`/v3/configurations/${configuration}`, { body, ...options });
  }

  /**
   * List configurations
   */
  list(options?: RequestOptions): APIPromise<ConfigurationListResponse> {
    return this._client.get('/v3/configurations', options);
  }

  /**
   * Delete configuration
   */
  delete(configuration: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v3/configurations/${configuration}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get configuration
   */
  show(configuration: string, options?: RequestOptions): APIPromise<V3API.Configuration> {
    return this._client.get(path`/v3/configurations/${configuration}`, options);
  }
}

export type ConfigurationListResponse = Array<V3API.Configuration>;

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
    type ConfigurationListResponse as ConfigurationListResponse,
    type ConfigurationCreateParams as ConfigurationCreateParams,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
  };
}
