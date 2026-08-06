// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from './api-keys';
import { APIKeyListResponse, APIKeyRotateResponse, APIKeyShowResponse, APIKeys } from './api-keys';
import * as ConfigurationsAPI from './configurations';
import {
  ConfigurationCreateParams,
  ConfigurationCreateResponse,
  ConfigurationListResponse,
  ConfigurationShowResponse,
  ConfigurationUpdateParams,
  ConfigurationUpdateResponse,
  Configurations,
} from './configurations';
import * as EncryptionAPI from './encryption';
import {
  Encryption,
  EncryptionDecryptParams,
  EncryptionDecryptResponse,
  EncryptionEncryptParams,
  EncryptionEncryptResponse,
} from './encryption';
import * as LogsAPI from './logs';
import {
  LogAPIParams,
  LogAPIResponse,
  LogActivityParams,
  LogActivityResponse,
  LogQanapiFlowParams,
  LogQanapiFlowResponse,
  LogUnifiedParams,
  LogUnifiedResponse,
  Logs,
} from './logs';
import * as RolesAPI from './roles';
import { RoleListResponse, Roles } from './roles';
import * as UsersAPI from './users';
import {
  UserCreateParams,
  UserCreateResponse,
  UserListResponse,
  UserMeResponse,
  UserPatchParams,
  UserPatchResponse,
  UserRestoreParams,
  UserRestoreResponse,
  UserShowResponse,
  Users,
} from './users';

export class V3 extends APIResource {
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  encryption: EncryptionAPI.Encryption = new EncryptionAPI.Encryption(this._client);
}

V3.Roles = Roles;
V3.Configurations = Configurations;
V3.Users = Users;
V3.APIKeys = APIKeys;
V3.Logs = Logs;
V3.Encryption = Encryption;

export declare namespace V3 {
  export { Roles as Roles, type RoleListResponse as RoleListResponse };

  export {
    Configurations as Configurations,
    type ConfigurationCreateResponse as ConfigurationCreateResponse,
    type ConfigurationUpdateResponse as ConfigurationUpdateResponse,
    type ConfigurationListResponse as ConfigurationListResponse,
    type ConfigurationShowResponse as ConfigurationShowResponse,
    type ConfigurationCreateParams as ConfigurationCreateParams,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
  };

  export {
    Users as Users,
    type UserCreateResponse as UserCreateResponse,
    type UserListResponse as UserListResponse,
    type UserMeResponse as UserMeResponse,
    type UserPatchResponse as UserPatchResponse,
    type UserRestoreResponse as UserRestoreResponse,
    type UserShowResponse as UserShowResponse,
    type UserCreateParams as UserCreateParams,
    type UserPatchParams as UserPatchParams,
    type UserRestoreParams as UserRestoreParams,
  };

  export {
    APIKeys as APIKeys,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyRotateResponse as APIKeyRotateResponse,
    type APIKeyShowResponse as APIKeyShowResponse,
  };

  export {
    Logs as Logs,
    type LogActivityResponse as LogActivityResponse,
    type LogAPIResponse as LogAPIResponse,
    type LogQanapiFlowResponse as LogQanapiFlowResponse,
    type LogUnifiedResponse as LogUnifiedResponse,
    type LogActivityParams as LogActivityParams,
    type LogAPIParams as LogAPIParams,
    type LogQanapiFlowParams as LogQanapiFlowParams,
    type LogUnifiedParams as LogUnifiedParams,
  };

  export {
    Encryption as Encryption,
    type EncryptionDecryptResponse as EncryptionDecryptResponse,
    type EncryptionEncryptResponse as EncryptionEncryptResponse,
    type EncryptionDecryptParams as EncryptionDecryptParams,
    type EncryptionEncryptParams as EncryptionEncryptParams,
  };
}
