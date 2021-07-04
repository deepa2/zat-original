import { Action } from '@ngrx/store';

export const OB_ADD_DETAILS = "[ObAddDetails] Ob Add Details";
export const OB_ADD_DETAILS_SUCCESS = "[ObAddDetails] Ob Add Details Success";
export const OB_ADD_DETAILS_ERROR = "[ObAddDetails] Ob Add Details Error";

export const OB_UPLOAD_DOCUMENT = "[ObAddDetails] Upload Document";
export const OB_UPLOAD_DOCUMENT_SUCCESS = "[ObAddDetails] Upload Document Success";
export const OB_UPLOAD_DOCUMENT_ERROR = "[ObAddDetails] Upload Document Error";
export const OB_UPLOAD_DOCUMENT_RESET = "[ObAddDetails] Upload Document Reset";

export const OB_DATA = "[ObAddDetails] Ob Add Data";
export const OB_DATA_SUCCESS = "[ObAddDetails] Ob Add Data Success";
export const OB_DATA_ERROR = "[ObAddDetails] Ob Add Data Error";

export const OB_DELETE_DATA = "[ObAddDetails] Ob Delete Data";
export const OB_DELETE_DATA_SUCCESS = "[ObAddDetails] Ob Delete Data Success";
export const OB_DELETE_DATA_ERROR = "[ObAddDetails] Ob Delete Data Error";

export const OB_DETAILS_RESET = "[ObAddDetails] Ob Details Reset";

export class GetObAddDetailAction implements Action {
  readonly type = OB_ADD_DETAILS;
  constructor(public url: string, public section: string, public params: any) { }
}

export class GetObAddDetailAction_Success implements Action {
  readonly type = OB_ADD_DETAILS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetObAddDetailAction_Failure implements Action {
  readonly type = OB_ADD_DETAILS_ERROR;
  constructor(public payload: any) { }
}

export class ObUploadDocumentAction implements Action {
  readonly type = OB_UPLOAD_DOCUMENT;
  constructor(public url: string,public section: string, public formData) { }
}

export class ObUploadDocumentActionSuccess implements Action {
  readonly type = OB_UPLOAD_DOCUMENT_SUCCESS;
  constructor(public payload: any) { }
}

export class ObUploadDocumentActionError implements Action {
  readonly type = OB_UPLOAD_DOCUMENT_ERROR;
  constructor(public payload: any) { }
}

export class ObAddDataAction implements Action {
  readonly type = OB_DATA;
  constructor(public url: string,public section: string, public data) { }
}

export class ObAddDataActionSuccess implements Action {
  readonly type = OB_DATA_SUCCESS;
  constructor(public payload: any) { }
}

export class ObAddDataActionError implements Action {
  readonly type = OB_DATA_ERROR;
  constructor(public payload: any) { }
}

export class ObAddDetailsResetAction implements Action {
  readonly type = OB_DETAILS_RESET;
  constructor() { }
}

export class ObUploadDocumentActionReset implements Action {
  readonly type = OB_UPLOAD_DOCUMENT_RESET;
  constructor() { }
}

export class ObDeleteDataAction implements Action {
  readonly type = OB_DELETE_DATA;
  constructor(public url: string, public data) { }
}

export class ObDeleteDataActionSuccess implements Action {
  readonly type = OB_DELETE_DATA_SUCCESS;
  constructor(public payload: any) { }
}

export class ObDeleteDataActionError implements Action {
  readonly type = OB_DELETE_DATA_ERROR;
  constructor(public payload: any) { }
}

export type GetObAddDetailsActions = GetObAddDetailAction
  | GetObAddDetailAction_Success
  | GetObAddDetailAction_Failure
  | ObUploadDocumentAction
  | ObUploadDocumentActionSuccess
  | ObUploadDocumentActionError
  | ObAddDataAction
  | ObAddDataActionSuccess
  | ObAddDataActionError
  | ObAddDetailsResetAction
  | ObUploadDocumentActionReset
  | ObDeleteDataAction
  | ObDeleteDataActionSuccess
  | ObDeleteDataActionError;