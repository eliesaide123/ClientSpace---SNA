import { NotificationError } from "./NotificationError";
import { checkRoles } from "./checkRoles";

export interface checkRolesResponse{
    error: boolean,
    success: checkRoles,
    errors: NotificationError[] | null
}