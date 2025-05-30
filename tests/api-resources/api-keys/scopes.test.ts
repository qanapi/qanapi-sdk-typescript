// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Qanapi from 'qanapi';

const client = new Qanapi({
  subdomain: 'My Subdomain',
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scopes', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.apiKeys.scopes.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('attach: only required params', async () => {
    const responsePromise = client.apiKeys.scopes.attach(0, { scope_ids: [25] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('attach: required and optional params', async () => {
    const response = await client.apiKeys.scopes.attach(0, { scope_ids: [25] });
  });

  // skipped: tests are disabled for the time being
  test.skip('detach: only required params', async () => {
    const responsePromise = client.apiKeys.scopes.detach(0, { scope_ids: [1] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('detach: required and optional params', async () => {
    const response = await client.apiKeys.scopes.detach(0, { scope_ids: [1] });
  });
});
