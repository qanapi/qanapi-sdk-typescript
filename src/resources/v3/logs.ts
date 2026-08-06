// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V3API from './v3';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Logs extends APIResource {
  /**
   * Get activity logs
   *
   * @example
   * ```ts
   * const response = await client.v3.logs.activity();
   * ```
   */
  activity(
    query: LogActivityParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LogActivityResponse> {
    return this._client.get('/v3/logs/activity', { query, ...options });
  }

  /**
   * Get API logs
   *
   * @example
   * ```ts
   * const response = await client.v3.logs.api();
   * ```
   */
  api(query: LogAPIParams | null | undefined = {}, options?: RequestOptions): APIPromise<LogAPIResponse> {
    return this._client.get('/v3/logs/api', { query, ...options });
  }

  /**
   * Get Qanapi Flow logs
   *
   * @example
   * ```ts
   * const response = await client.v3.logs.qanapiFlow();
   * ```
   */
  qanapiFlow(
    query: LogQanapiFlowParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LogQanapiFlowResponse> {
    return this._client.get('/v3/logs/qanapi-flow', { query, ...options });
  }

  /**
   * Get unified logs
   *
   * @example
   * ```ts
   * const response = await client.v3.logs.unified();
   * ```
   */
  unified(
    query: LogUnifiedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LogUnifiedResponse> {
    return this._client.get('/v3/logs/unified', { query, ...options });
  }
}

export interface LogActivityResponse {
  current_page?: number;

  data?: Array<LogActivityResponse.Data>;

  first_page_url?: string;

  from?: number | null;

  last_page?: number;

  last_page_url?: string;

  links?: Array<LogActivityResponse.Link>;

  next_page_url?: string | null;

  path?: string;

  per_page?: number;

  prev_page_url?: string | null;

  to?: number | null;

  total?: number;
}

export namespace LogActivityResponse {
  export interface Data {
    action?: string;

    description?: string;

    ip?: string | null;

    timestamp?: string;

    user?: V3API.User;

    when?: string;
  }

  export interface Link {
    active?: boolean;

    label?: string;

    page?: number | null;

    url?: string | null;
  }
}

export interface LogAPIResponse {
  current_page?: number;

  data?: Array<LogAPIResponse.Data>;

  first_page_url?: string;

  from?: number | null;

  last_page?: number;

  last_page_url?: string;

  links?: Array<LogAPIResponse.Link>;

  next_page_url?: string | null;

  path?: string;

  per_page?: number;

  prev_page_url?: string | null;

  to?: number | null;

  total?: number;
}

export namespace LogAPIResponse {
  export interface Data {
    api_key?: V3API.APIKey;

    api_key_id?: number;

    configuration_id?: number | null;

    created_at?: string;

    domain?: string;

    endpoint?: string;

    method?: string;

    proxied?: boolean;

    proxied_to?: string | null;

    request_id?: string | null;

    status_code?: number;
  }

  export interface Link {
    active?: boolean;

    label?: string;

    page?: number | null;

    url?: string | null;
  }
}

export interface LogQanapiFlowResponse {
  current_page?: number;

  data?: Array<LogQanapiFlowResponse.Data>;

  first_page_url?: string;

  from?: number | null;

  last_page?: number;

  last_page_url?: string;

  links?: Array<LogQanapiFlowResponse.Link>;

  next_page_url?: string | null;

  path?: string;

  per_page?: number;

  prev_page_url?: string | null;

  to?: number | null;

  total?: number;
}

export namespace LogQanapiFlowResponse {
  export interface Data {
    action?: string;

    configuration_id?: number | null;

    created_at?: string;

    email?: string | null;

    request_id?: string | null;

    type?: string;
  }

  export interface Link {
    active?: boolean;

    label?: string;

    page?: number | null;

    url?: string | null;
  }
}

export interface LogUnifiedResponse {
  current_page?: number;

  data?: Array<LogUnifiedResponse.Data>;

  first_page_url?: string;

  from?: number | null;

  last_page?: number;

  last_page_url?: string;

  links?: Array<LogUnifiedResponse.Link>;

  next_page_url?: string | null;

  path?: string;

  per_page?: number;

  prev_page_url?: string | null;

  to?: number | null;

  total?: number;
}

export namespace LogUnifiedResponse {
  export interface Data {
    action?: string;

    causer_email?: string | null;

    configuration?: V3API.Configuration;

    description?: string;

    details?: unknown | null;

    full_log?: Data.ActivityLog | Data.APILog | Data.QanapiFlowLog;

    log_type?: 'activity' | 'api' | 'usage';

    request_id?: string | null;

    status_code?: number | null;

    timestamp?: string;

    user?: V3API.User;
  }

  export namespace Data {
    export interface ActivityLog {
      action?: string;

      description?: string;

      ip?: string | null;

      timestamp?: string;

      user?: V3API.User;

      when?: string;
    }

    export interface APILog {
      api_key?: V3API.APIKey;

      api_key_id?: number;

      configuration_id?: number | null;

      created_at?: string;

      domain?: string;

      endpoint?: string;

      method?: string;

      proxied?: boolean;

      proxied_to?: string | null;

      request_id?: string | null;

      status_code?: number;
    }

    export interface QanapiFlowLog {
      action?: string;

      configuration_id?: number | null;

      created_at?: string;

      email?: string | null;

      request_id?: string | null;

      type?: string;
    }
  }

  export interface Link {
    active?: boolean;

    label?: string;

    page?: number | null;

    url?: string | null;
  }
}

export interface LogActivityParams {
  logName?: string;

  page?: number;

  per_page?: number;

  /**
   * User ID filter
   */
  user?: number;

  user_id?: number;
}

export interface LogAPIParams {
  /**
   * API Key ID filter
   */
  apiKey?: number;

  page?: number;

  per_page?: number;
}

export interface LogQanapiFlowParams {
  page?: number;

  per_page?: number;

  /**
   * Integration type filter
   */
  type?: string;
}

export interface LogUnifiedParams {
  action?: string;

  causer_email?: string;

  description?: string;

  details?: string;

  log_type?: 'activity' | 'api' | 'usage';

  page?: number;

  per_page?: number;

  request_id?: string;

  status_code?: number;

  user_id?: number;
}

export declare namespace Logs {
  export {
    type LogActivityResponse as LogActivityResponse,
    type LogAPIResponse as LogAPIResponse,
    type LogQanapiFlowResponse as LogQanapiFlowResponse,
    type LogUnifiedResponse as LogUnifiedResponse,
    type LogActivityParams as LogActivityParams,
    type LogAPIParams as LogAPIParams,
    type LogQanapiFlowParams as LogQanapiFlowParams,
    type LogUnifiedParams as LogUnifiedParams,
  };
}
