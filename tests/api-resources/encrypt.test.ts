// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Qanapi from 'qanapi';

const client = new Qanapi({
  apiKey: 'My API Key',
  subdomain: 'My-Subdomain',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource encrypt', () => {
  // skipped: tests are disabled for the time being
  test.skip('encryptData: only required params', async () => {
    const responsePromise = client.encrypt.encryptData({ data: { password: 'bar' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('encryptData: required and optional params', async () => {
    const response = await client.encrypt.encryptData({
      data: { password: 'bar' },
      access: { acl: ['admin'] },
      attributes: { classification: 'confidential', owner: 'alice@example.com', tags: ['legal'] },
      sensitiveFields: ['password'],
    });
  });
});
