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

# V3

## Roles

Types:

- <code><a href="./src/resources/v3/roles.ts">RoleListResponse</a></code>

Methods:

- <code title="get /v3/roles">client.v3.roles.<a href="./src/resources/v3/roles.ts">list</a>() -> RoleListResponse</code>

## Configurations

Types:

- <code><a href="./src/resources/v3/configurations.ts">ConfigurationCreateResponse</a></code>
- <code><a href="./src/resources/v3/configurations.ts">ConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/v3/configurations.ts">ConfigurationListResponse</a></code>
- <code><a href="./src/resources/v3/configurations.ts">ConfigurationShowResponse</a></code>

Methods:

- <code title="post /v3/configurations">client.v3.configurations.<a href="./src/resources/v3/configurations.ts">create</a>({ ...params }) -> ConfigurationCreateResponse</code>
- <code title="put /v3/configurations/{configuration}">client.v3.configurations.<a href="./src/resources/v3/configurations.ts">update</a>(configuration, { ...params }) -> ConfigurationUpdateResponse</code>
- <code title="get /v3/configurations">client.v3.configurations.<a href="./src/resources/v3/configurations.ts">list</a>() -> ConfigurationListResponse</code>
- <code title="delete /v3/configurations/{configuration}">client.v3.configurations.<a href="./src/resources/v3/configurations.ts">delete</a>(configuration) -> void</code>
- <code title="get /v3/configurations/{configuration}">client.v3.configurations.<a href="./src/resources/v3/configurations.ts">show</a>(configuration) -> ConfigurationShowResponse</code>

## Users

Types:

- <code><a href="./src/resources/v3/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/v3/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/v3/users.ts">UserMeResponse</a></code>
- <code><a href="./src/resources/v3/users.ts">UserPatchResponse</a></code>
- <code><a href="./src/resources/v3/users.ts">UserRestoreResponse</a></code>
- <code><a href="./src/resources/v3/users.ts">UserShowResponse</a></code>

Methods:

- <code title="post /v3/users">client.v3.users.<a href="./src/resources/v3/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="get /v3/users">client.v3.users.<a href="./src/resources/v3/users.ts">list</a>() -> UserListResponse</code>
- <code title="delete /v3/users/{user}">client.v3.users.<a href="./src/resources/v3/users.ts">delete</a>(user) -> void</code>
- <code title="get /v3/users/me">client.v3.users.<a href="./src/resources/v3/users.ts">me</a>() -> UserMeResponse</code>
- <code title="patch /v3/users/{user}">client.v3.users.<a href="./src/resources/v3/users.ts">patch</a>(user, { ...params }) -> UserPatchResponse</code>
- <code title="patch /v3/users/{user}">client.v3.users.<a href="./src/resources/v3/users.ts">restore</a>(user, { ...params }) -> UserRestoreResponse</code>
- <code title="get /v3/users/{user}">client.v3.users.<a href="./src/resources/v3/users.ts">show</a>(user) -> UserShowResponse</code>

## APIKeys

Types:

- <code><a href="./src/resources/v3/api-keys.ts">APIKeyListResponse</a></code>
- <code><a href="./src/resources/v3/api-keys.ts">APIKeyRotateResponse</a></code>
- <code><a href="./src/resources/v3/api-keys.ts">APIKeyShowResponse</a></code>

Methods:

- <code title="get /v3/api-keys">client.v3.apiKeys.<a href="./src/resources/v3/api-keys.ts">list</a>() -> APIKeyListResponse</code>
- <code title="post /v3/api-keys/{apiKey}/revoke">client.v3.apiKeys.<a href="./src/resources/v3/api-keys.ts">revoke</a>(apiKey) -> void</code>
- <code title="post /v3/api-keys/{apiKey}/rotate">client.v3.apiKeys.<a href="./src/resources/v3/api-keys.ts">rotate</a>(apiKey) -> APIKeyRotateResponse</code>
- <code title="get /v3/api-keys/{apiKey}">client.v3.apiKeys.<a href="./src/resources/v3/api-keys.ts">show</a>(apiKey) -> APIKeyShowResponse</code>

## Logs

Types:

- <code><a href="./src/resources/v3/logs.ts">LogActivityResponse</a></code>
- <code><a href="./src/resources/v3/logs.ts">LogAPIResponse</a></code>
- <code><a href="./src/resources/v3/logs.ts">LogQanapiFlowResponse</a></code>
- <code><a href="./src/resources/v3/logs.ts">LogUnifiedResponse</a></code>

Methods:

- <code title="get /v3/logs/activity">client.v3.logs.<a href="./src/resources/v3/logs.ts">activity</a>({ ...params }) -> LogActivityResponse</code>
- <code title="get /v3/logs/api">client.v3.logs.<a href="./src/resources/v3/logs.ts">api</a>({ ...params }) -> LogAPIResponse</code>
- <code title="get /v3/logs/qanapi-flow">client.v3.logs.<a href="./src/resources/v3/logs.ts">qanapiFlow</a>({ ...params }) -> LogQanapiFlowResponse</code>
- <code title="get /v3/logs/unified">client.v3.logs.<a href="./src/resources/v3/logs.ts">unified</a>({ ...params }) -> LogUnifiedResponse</code>

## Encryption

Types:

- <code><a href="./src/resources/v3/encryption.ts">EncryptionDecryptResponse</a></code>
- <code><a href="./src/resources/v3/encryption.ts">EncryptionEncryptResponse</a></code>

Methods:

- <code title="post /v3/encryption/{proxy}/decrypt">client.v3.encryption.<a href="./src/resources/v3/encryption.ts">decrypt</a>(proxy, { ...params }) -> EncryptionDecryptResponse</code>
- <code title="post /v3/encryption/{proxy}/encrypt">client.v3.encryption.<a href="./src/resources/v3/encryption.ts">encrypt</a>(proxy, { ...params }) -> EncryptionEncryptResponse</code>
