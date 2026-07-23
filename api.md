# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthLoginResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthLogoutResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthRefreshTokenResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthRetrieveUserDetailsResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthRevokeTokenResponse</a></code>

Methods:

- <code title="post /auth/login">client.auth.<a href="./src/resources/auth.ts">login</a>({ ...params }) -> AuthLoginResponse</code>
- <code title="post /auth/logout">client.auth.<a href="./src/resources/auth.ts">logout</a>() -> AuthLogoutResponse</code>
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

- <code><a href="./src/resources/api-keys.ts">APIKeyRevokeResponse</a></code>
- <code><a href="./src/resources/api-keys.ts">APIKeyRotateResponse</a></code>

Methods:

- <code title="patch /api-keys/{apiKey}/revoke">client.apiKeys.<a href="./src/resources/api-keys.ts">revoke</a>(apiKey) -> APIKeyRevokeResponse</code>
- <code title="patch /api-keys/{apiKey}/rotate">client.apiKeys.<a href="./src/resources/api-keys.ts">rotate</a>(apiKey) -> APIKeyRotateResponse</code>
