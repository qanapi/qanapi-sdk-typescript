# V2

## Auth

Types:

- <code><a href="./src/resources/v2/auth.ts">AuthLoginResponse</a></code>
- <code><a href="./src/resources/v2/auth.ts">AuthLogoutResponse</a></code>
- <code><a href="./src/resources/v2/auth.ts">AuthRefreshTokenResponse</a></code>
- <code><a href="./src/resources/v2/auth.ts">AuthRetrieveUserDetailsResponse</a></code>
- <code><a href="./src/resources/v2/auth.ts">AuthRevokeTokenResponse</a></code>

Methods:

- <code title="post /v2/auth/login">client.v2.auth.<a href="./src/resources/v2/auth.ts">login</a>({ ...params }) -> AuthLoginResponse</code>
- <code title="post /v2/auth/logout">client.v2.auth.<a href="./src/resources/v2/auth.ts">logout</a>() -> AuthLogoutResponse</code>
- <code title="post /v2/auth/refresh">client.v2.auth.<a href="./src/resources/v2/auth.ts">refreshToken</a>() -> AuthRefreshTokenResponse</code>
- <code title="get /v2/auth/userdetails">client.v2.auth.<a href="./src/resources/v2/auth.ts">retrieveUserDetails</a>() -> AuthRetrieveUserDetailsResponse</code>
- <code title="post /v2/auth/revoke">client.v2.auth.<a href="./src/resources/v2/auth.ts">revokeToken</a>() -> AuthRevokeTokenResponse</code>

## Encrypt

Types:

- <code><a href="./src/resources/v2/encrypt.ts">EncryptEncryptDataResponse</a></code>

Methods:

- <code title="post /v2/encrypt">client.v2.encrypt.<a href="./src/resources/v2/encrypt.ts">encryptData</a>({ ...params }) -> EncryptEncryptDataResponse</code>

## Decrypt

Types:

- <code><a href="./src/resources/v2/decrypt.ts">DecryptDecryptPayloadResponse</a></code>

Methods:

- <code title="post /v2/decrypt">client.v2.decrypt.<a href="./src/resources/v2/decrypt.ts">decryptPayload</a>({ ...params }) -> DecryptDecryptPayloadResponse</code>

## APIKeys

Types:

- <code><a href="./src/resources/v2/api-keys.ts">APIKeyRevokeResponse</a></code>
- <code><a href="./src/resources/v2/api-keys.ts">APIKeyRotateResponse</a></code>

Methods:

- <code title="patch /v2/api-keys/{apiKey}/revoke">client.v2.apiKeys.<a href="./src/resources/v2/api-keys.ts">revoke</a>(apiKey) -> APIKeyRevokeResponse</code>
- <code title="patch /v2/api-keys/{apiKey}/rotate">client.v2.apiKeys.<a href="./src/resources/v2/api-keys.ts">rotate</a>(apiKey) -> APIKeyRotateResponse</code>
