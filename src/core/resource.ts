// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Qanapi } from '../client';

export abstract class APIResource {
  protected _client: Qanapi;

  constructor(client: Qanapi) {
    this._client = client;
  }
}
