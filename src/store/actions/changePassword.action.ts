import { Action } from '@ngrx/store';
import { verifyPassword, passwordStatus } from '../../models/changePassword.model';

export const OB_CHANGEPASSWORD = "ChangePassword";
export const OB_CHANGEPASSWORD_SUCCESS = "ChangePassword Success";
export const OB_CHANGEPASSWORD_FAILURE = "ChangePassword Failure";
export const OB_CHANGEPASSWORD_RESET = "ChangePassword Reset"

export class OBChangePassword implements Action{
   readonly type = OB_CHANGEPASSWORD;

   constructor(public payload:verifyPassword){}
}

export class OBPasswordChangeSuccess implements Action{
    readonly type = OB_CHANGEPASSWORD_SUCCESS;

    constructor(public payload:passwordStatus){}
 }

 export class OBPaswordChangeFailure implements Action{
    readonly type = OB_CHANGEPASSWORD_FAILURE;

    constructor(public payload:any){}
 }

 export class OBChangePasswordReset implements Action {
     readonly type = OB_CHANGEPASSWORD_RESET;
     constructor() { }
 }

 export type onBoardingPasswordChange = OBChangePassword | OBPasswordChangeSuccess |OBPaswordChangeFailure |OBChangePasswordReset;