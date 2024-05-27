import { createAction, props } from "@ngrx/store";
import { GetUserResponse } from "../../../shared/models/GetUserResponse";

export  const getUserAction = createAction(
    "[Get User] Get User",
    props<{GetUserResponse: GetUserResponse}>()
)