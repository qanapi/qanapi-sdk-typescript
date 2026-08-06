// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeysAPI from './api-keys';
import { APIKeyListResponse, APIKeyRotateResponse, APIKeys } from './api-keys';
import * as ConfigurationsAPI from './configurations';
import {
  ConfigurationCreateParams,
  ConfigurationListResponse,
  ConfigurationUpdateParams,
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
import { UserCreateParams, UserListResponse, UserPatchParams, Users } from './users';

export class V3 extends APIResource {
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  encryption: EncryptionAPI.Encryption = new EncryptionAPI.Encryption(this._client);
}

export interface APIKey {
  id: string;

  prefix: string;

  status: 'active' | 'revoked';

  configurations?: Array<Configuration>;

  created_at?: string;

  permissions?: Array<Permission>;

  revoked_at?: string | null;

  updated_at?: string;

  user?: User;
}

export interface Configuration {
  id: string;

  name: string;

  type: string;

  values?: Array<Value>;
}

export interface Permission {
  name: string;
}

export interface Role {
  name: string;

  description?: string | null;

  permissions?: Array<Permission>;
}

export interface User {
  id: number;

  email: string;

  name: string;

  created_at?: string;

  roles?: Array<Role>;

  two_factor_enabled?: boolean;

  updated_at?: string;
}

export interface Value {
  key: string;

  value: string;
}

V3.Roles = Roles;
V3.Configurations = Configurations;
V3.Users = Users;
V3.APIKeys = APIKeys;
V3.Logs = Logs;
V3.Encryption = Encryption;

export declare namespace V3 {
  export {
    type APIKey as APIKey,
    type Configuration as Configuration,
    type Permission as Permission,
    type Role as Role,
    type User as User,
    type Value as Value,
  };

  export { Roles as Roles, type RoleListResponse as RoleListResponse };

  export {
    Configurations as Configurations,
    type ConfigurationListResponse as ConfigurationListResponse,
    type ConfigurationCreateParams as ConfigurationCreateParams,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
  };

  export {
    Users as Users,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserPatchParams as UserPatchParams,
  };

  export {
    APIKeys as APIKeys,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyRotateResponse as APIKeyRotateResponse,
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
