import { CheckRoles } from "./check-roles.effects";
import { LoadClientCredentialsFromIndexedDB } from "./load-client-credentials-indexedDB.effect";

export const ClientPoliciesEffects =[
    CheckRoles,
    LoadClientCredentialsFromIndexedDB
];

export * from './check-roles.effects';
export * from './load-client-credentials-indexedDB.effect'