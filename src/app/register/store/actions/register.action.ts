import { createAction, props } from "@ngrx/store";

export  const registerRequest = createAction(
    "[Registration Request] Registration Request",
    props<{registration: "here we should see what it takes and create a model for it "}>()
)

export const registerSuccess = createAction(
    "[Registration Success] Registration Success",
    props<{registration: "here we should see what it takes and create a model for it "}>()
)

export const registerFailure = createAction(
    "[Registration Failure] Registration Failure",
    props<{error: any}>()
)