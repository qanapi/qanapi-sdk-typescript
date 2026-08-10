// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from './api-keys';
import { APIKeyRevokeResponse, APIKeyRotateResponse, APIKeys } from './api-keys';
import * as AuthAPI from './auth';
import {
  Auth,
  AuthLoginParams,
  AuthLoginResponse,
  AuthLogoutResponse,
  AuthRefreshTokenResponse,
  AuthRetrieveUserDetailsResponse,
  AuthRevokeTokenResponse,
} from './auth';
import * as DecryptAPI from './decrypt';
import { Decrypt, DecryptDecryptPayloadParams, DecryptDecryptPayloadResponse } from './decrypt';
import * as EncryptAPI from './encrypt';
import { Encrypt, EncryptEncryptDataParams, EncryptEncryptDataResponse } from './encrypt';

export class V2 extends APIResource {
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  encrypt: EncryptAPI.Encrypt = new EncryptAPI.Encrypt(this._client);
  decrypt: DecryptAPI.Decrypt = new DecryptAPI.Decrypt(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
}

V2.Auth = Auth;
V2.Encrypt = Encrypt;
V2.Decrypt = Decrypt;
V2.APIKeys = APIKeys;

export declare namespace V2 {
  export {
    Auth as Auth,
    type AuthLoginResponse as AuthLoginResponse,
    type AuthLogoutResponse as AuthLogoutResponse,
    type AuthRefreshTokenResponse as AuthRefreshTokenResponse,
    type AuthRetrieveUserDetailsResponse as AuthRetrieveUserDetailsResponse,
    type AuthRevokeTokenResponse as AuthRevokeTokenResponse,
    type AuthLoginParams as AuthLoginParams,
  };

  export {
    Encrypt as Encrypt,
    type EncryptEncryptDataResponse as EncryptEncryptDataResponse,
    type EncryptEncryptDataParams as EncryptEncryptDataParams,
  };

  export {
    Decrypt as Decrypt,
    type DecryptDecryptPayloadResponse as DecryptDecryptPayloadResponse,
    type DecryptDecryptPayloadParams as DecryptDecryptPayloadParams,
  };

  export {
    APIKeys as APIKeys,
    type APIKeyRevokeResponse as APIKeyRevokeResponse,
    type APIKeyRotateResponse as APIKeyRotateResponse,
  };
}
