// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Qanapi from 'qanapi';

const client = new Qanapi({
  apiKey: 'My API Key',
  subdomain: 'My-Subdomain',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource logs', () => {
  // Mock server tests are disabled
  test.skip('activity', async () => {
    const responsePromise = client.v3.logs.activity();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('activity: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v3.logs.activity(
        {
          logName: 'logName',
          page: 0,
          per_page: 0,
          user: 0,
          user_id: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Qanapi.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('api', async () => {
    const responsePromise = client.v3.logs.api();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('api: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v3.logs.api(
        {
          apiKey: 0,
          page: 0,
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Qanapi.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('qanapiFlow', async () => {
    const responsePromise = client.v3.logs.qanapiFlow();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('qanapiFlow: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v3.logs.qanapiFlow(
        {
          page: 0,
          per_page: 0,
          type: 'type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Qanapi.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('unified', async () => {
    const responsePromise = client.v3.logs.unified();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('unified: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v3.logs.unified(
        {
          action: 'action',
          causer_email: 'causer_email',
          description: 'description',
          details: 'details',
          log_type: 'activity',
          page: 0,
          per_page: 0,
          request_id: 'request_id',
          status_code: 0,
          user_id: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Qanapi.NotFoundError);
  });
});
