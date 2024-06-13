import { CheckRoles } from "./check-roles.effect";
import { LoadClientCredentialsFromIndexedDB } from "./load-client-credentials-indexedDB.effect";
import { GetClientInfo } from "./get-client-info.effect";

export const ClientPoliciesEffects =[
    CheckRoles,
    LoadClientCredentialsFromIndexedDB,
    GetClientInfo
];

export * from './check-roles.effect';
export * from './load-client-credentials-indexedDB.effect'
export * from './get-client-info.effect'