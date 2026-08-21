// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Qanapi from 'qanapi';

const client = new Qanapi({
  apiKey: 'My API Key',
  subdomain: 'My-Subdomain',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource classifications', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.v3.classifications.create({
      bg_color: '#e1cb97',
      fg_color: '#e1cb97',
      name: 'name',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.v3.classifications.create({
      bg_color: '#e1cb97',
      fg_color: '#e1cb97',
      name: 'name',
      description: 'description',
      emoji: 'emoji',
      gws_groups: [
        {
          id: 'id',
          email: 'email',
          name: 'name',
        },
      ],
      provider_container_id: 0,
      roles: [0],
      users: [0],
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.v3.classifications.update(0, {
      bg_color: '#e1cb97',
      fg_color: '#e1cb97',
      name: 'name',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.v3.classifications.update(0, {
      bg_color: '#e1cb97',
      fg_color: '#e1cb97',
      name: 'name',
      description: 'description',
      emoji: 'emoji',
      gws_groups: [
        {
          id: 'id',
          email: 'email',
          name: 'name',
        },
      ],
      provider_container_id: 0,
      roles: [0],
      users: [0],
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.v3.classifications.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v3.classifications.list(
        {
          direction: 'asc',
          per_page: 0,
          providers: [0],
          roles: [0],
          search: 'search',
          sort: 'sort',
          user: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Qanapi.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.v3.classifications.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('show', async () => {
    const responsePromise = client.v3.classifications.show(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
