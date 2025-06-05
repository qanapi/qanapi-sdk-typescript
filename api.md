# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthLoginResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthRefreshTokenResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthRetrieveUserDetailsResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthRevokeTokenResponse</a></code>

Methods:

- <code title="post /auth/login">client.auth.<a href="./src/resources/auth.ts">login</a>({ ...params }) -> AuthLoginResponse</code>
- <code title="post /auth/refresh">client.auth.<a href="./src/resources/auth.ts">refreshToken</a>() -> AuthRefreshTokenResponse</code>
- <code title="get /auth/userdetails">client.auth.<a href="./src/resources/auth.ts">retrieveUserDetails</a>() -> AuthRetrieveUserDetailsResponse</code>
- <code title="post /auth/revoke">client.auth.<a href="./src/resources/auth.ts">revokeToken</a>() -> AuthRevokeTokenResponse</code>

# Encrypt

Types:

- <code><a href="./src/resources/encrypt.ts">EncryptEncryptDataResponse</a></code>

Methods:

- <code title="post /encrypt">client.encrypt.<a href="./src/resources/encrypt.ts">encryptData</a>({ ...params }) -> EncryptEncryptDataResponse</code>

# Decrypt

Types:

- <code><a href="./src/resources/decrypt.ts">DecryptDecryptPayloadResponse</a></code>

Methods:

- <code title="post /decrypt">client.decrypt.<a href="./src/resources/decrypt.ts">decryptPayload</a>({ ...params }) -> DecryptDecryptPayloadResponse</code>

# APIKeys

Types:

- <code><a href="./src/resources/api-keys/api-keys.ts">APIKeyRevokeResponse</a></code>
- <code><a href="./src/resources/api-keys/api-keys.ts">APIKeyRotateResponse</a></code>

Methods:

- <code title="patch /api-keys/{apiKey}/revoke">client.apiKeys.<a href="./src/resources/api-keys/api-keys.ts">revoke</a>(apiKey) -> APIKeyRevokeResponse</code>
- <code title="patch /api-keys/{apiKey}/rotate">client.apiKeys.<a href="./src/resources/api-keys/api-keys.ts">rotate</a>(apiKey) -> APIKeyRotateResponse</code>

## Scopes

Types:

- <code><a href="./src/resources/api-keys/scopes.ts">ScopeRetrieveResponse</a></code>
- <code><a href="./src/resources/api-keys/scopes.ts">ScopeAttachResponse</a></code>
- <code><a href="./src/resources/api-keys/scopes.ts">ScopeDetachResponse</a></code>

Methods:

- <code title="get /api-keys/{apiKey}/scopes">client.apiKeys.scopes.<a href="./src/resources/api-keys/scopes.ts">retrieve</a>(apiKey) -> ScopeRetrieveResponse</code>
- <code title="post /api-keys/{apiKey}/scopes/attach">client.apiKeys.scopes.<a href="./src/resources/api-keys/scopes.ts">attach</a>(apiKey, { ...params }) -> ScopeAttachResponse</code>
- <code title="post /api-keys/{apiKey}/scopes/detach">client.apiKeys.scopes.<a href="./src/resources/api-keys/scopes.ts">detach</a>(apiKey, { ...params }) -> ScopeDetachResponse</code>

# Scopes

Types:

- <code><a href="./src/resources/scopes.ts">ScopeCreateResponse</a></code>
- <code><a href="./src/resources/scopes.ts">ScopeRetrieveResponse</a></code>
- <code><a href="./src/resources/scopes.ts">ScopeUpdateResponse</a></code>
- <code><a href="./src/resources/scopes.ts">ScopeListResponse</a></code>
- <code><a href="./src/resources/scopes.ts">ScopeDeleteResponse</a></code>

Methods:

- <code title="post /scopes">client.scopes.<a href="./src/resources/scopes.ts">create</a>({ ...params }) -> ScopeCreateResponse</code>
- <code title="get /scopes/{id}">client.scopes.<a href="./src/resources/scopes.ts">retrieve</a>(id) -> ScopeRetrieveResponse</code>
- <code title="put /scopes/{id}">client.scopes.<a href="./src/resources/scopes.ts">update</a>(id, { ...params }) -> ScopeUpdateResponse</code>
- <code title="get /scopes">client.scopes.<a href="./src/resources/scopes.ts">list</a>() -> ScopeListResponse</code>
- <code title="delete /scopes/{id}">client.scopes.<a href="./src/resources/scopes.ts">delete</a>(id) -> ScopeDeleteResponse</code>
