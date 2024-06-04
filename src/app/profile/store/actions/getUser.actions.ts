import { createAction, props } from "@ngrx/store";
import { GetUserResponse } from "../../../shared/models/GetUserResponse";

export  const getUserAction = createAction(
    "[User] Get User",
    props<{GetUserResponse: GetUserResponse}>()
)