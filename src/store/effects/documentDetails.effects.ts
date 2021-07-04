import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';
import * as DocumentDetailsAction from'../actions/documentDetails.action';

@Injectable()

export class DocumentDetailsEffect{
    constructor (private action$:Actions, private httpProvider:HttpProvider){}

    @Effect()
    DocumentDetails$:Observable<Action> = this.action$
    .ofType(DocumentDetailsAction.GET_DOCUMENT_DETAILS).pipe(
        switchMap((action:DocumentDetailsAction.getDocumentDetailsAction) =>{
            return this.httpProvider.http.commonService({url:action.url,data: {},onboarding : true})
            .map((response:any)=>{
                return new DocumentDetailsAction.getDocumentDetails_Success(response.details.responseList) ;
            })
            .catch(error => Observable.of(new DocumentDetailsAction.getDocumentDetails_Failure(error)))
        })
    )
    
}