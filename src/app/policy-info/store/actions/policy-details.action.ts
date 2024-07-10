import { createAction, props } from '@ngrx/store';
import { GetPolicyDetailsInteface } from '../../../shared/models/GetPolicyDetails';

export const CheckPolicyDetailsRequest = createAction(
    '[Check Policy Details Request] Check Policy Details Request'
);

export const CheckPolicyDetailsSuccess = createAction(
    '[Check Policy Details Success] Check Policy Details Success',
    props<{ GetPolicyDetails: GetPolicyDetailsInteface }>()
);

export const CheckPolicyDetailsFailure = createAction(
    '[Check Policy Details Failure] Check Policy Details Failure', 
    props<{ error: any }>()
);
