import { CheckRoles } from "./check-roles.effects";
import { LoadClientCredentialsFromIndexedDB } from "./load-client-credentials-indexedDB.effect";
import { GetClientInfo } from "./get-client-info.effects";

export const ClientPoliciesEffects =[
    CheckRoles,
    LoadClientCredentialsFromIndexedDB,
    GetClientInfo
];

export * from './check-roles.effects';
export * from './load-client-credentials-indexedDB.effect'
export * from './get-client-info.effects'