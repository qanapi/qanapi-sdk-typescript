// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Qanapi from 'qanapi';

const client = new Qanapi({
  apiKey: 'My API Key',
  email: 'My Email',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource decrypt', () => {
  // skipped: tests are disabled for the time being
  test.skip('decryptPayload: only required params', async () => {
    const responsePromise = client.decrypt.decryptPayload({ data: { password: 'enc$::abc123::...' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('decryptPayload: required and optional params', async () => {
    const response = await client.decrypt.decryptPayload({
      data: { password: 'enc$::abc123::...' },
      sensitiveFields: ['password'],
    });
  });
});
