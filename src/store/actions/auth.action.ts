import { Action } from '@ngrx/store';
import { User, Authenticate } from '../../models/auth.model';

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';
export const LOGOUT_SUCCESS = '[Auth] Logout Success';
export const LOGOUT_FAILURE = '[Auth] Logout Failure';
export const LOGIN_SET_DATA = '[Auth] Login set data';

export class Login implements Action {
    readonly type = LOGIN;
  
    constructor(public payload: Authenticate) {}
  }
  
  export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
  
    constructor(public payload: User) {}
  }
  
  export class LoginFailure implements Action {
    readonly type = LOGIN_FAILURE;
  
    constructor(public payload: any) {}
  }
  
  export class Logout implements Action {
    readonly type = LOGOUT;
    constructor(public payload: any){}
  }

  export class LogoutSuccess implements Action {
    readonly type = LOGOUT_SUCCESS;
  
    constructor(public payload: any) {}
  }
  
  export class LogoutFailure implements Action {
    readonly type = LOGOUT_FAILURE;
  
    constructor(public payload: any) {}
  }

  export class SetLoginData implements Action{
    readonly type = LOGIN_SET_DATA;
    constructor(public payload:any){}
}
  
  export type AuthActions =
    | Login
    | LoginSuccess
    | LoginFailure
    | Logout
    | LogoutSuccess
    | LogoutFailure
    | SetLoginData;