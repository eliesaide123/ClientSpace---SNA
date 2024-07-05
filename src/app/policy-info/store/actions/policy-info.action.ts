import { createAction, props } from '@ngrx/store';
import { GetClientInfo } from '../../../shared/models/GetClientInfo';
import { ClientInfo } from '../../../shared/models/clientInfo';

export const CheckPolicyInfoRequest = createAction(
    '[Check Policy Info Request] Check Policy Info Request'
);

export const CheckPolicyInfoSuccess = createAction(
    '[Check Policy Info Success] Check Policy Info Success',
    props<{ getClientInfo: ClientInfo }>()
);

export const CheckPolicyInfoFailure = createAction(
    '[Check Policy Info Failure] Check Policy Info Failure', 
    props<{ error: any }>()
);
