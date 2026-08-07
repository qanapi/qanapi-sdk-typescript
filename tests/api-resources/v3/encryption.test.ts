// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Qanapi from 'qanapi';

const client = new Qanapi({
  apiKey: 'My API Key',
  subdomain: 'My-Subdomain',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource encryption', () => {
  // Mock server tests are disabled
  test.skip('decrypt: only required params', async () => {
    const responsePromise = client.v3.encryption.decrypt('proxy', {
      data: { foo: 'bar' },
      'x-qanapi-fields': 'x-qanapi-fields',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('decrypt: required and optional params', async () => {
    const response = await client.v3.encryption.decrypt('proxy', {
      data: { foo: 'bar' },
      'x-qanapi-fields': 'x-qanapi-fields',
    });
  });

  // Mock server tests are disabled
  test.skip('encrypt: only required params', async () => {
    const responsePromise = client.v3.encryption.encrypt('proxy', {
      data: { foo: 'bar' },
      'x-qanapi-fields': 'x-qanapi-fields',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('encrypt: required and optional params', async () => {
    const response = await client.v3.encryption.encrypt('proxy', {
      data: { foo: 'bar' },
      'x-qanapi-fields': 'x-qanapi-fields',
      'x-qanapi-destination': 'x-qanapi-destination',
    });
  });
});
