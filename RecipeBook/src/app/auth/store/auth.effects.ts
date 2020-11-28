import { Actions, Effect } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators';
import * as AuthActions from './auth.actions'
import { ofType } from 'redux-observable';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
  }

  @Injectable()
export class AuthEffects{
    @Effect()
    authLogin = this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStart)=>{
            return this.http
            .post<AuthResponseData>(
              'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseApiKey,
              {
                email: authData.payload.email,
                password: authData.payload.password,
                returnSecureToken: true
              }
            )
            .pipe(
              map(resData => {
                const expirationDate = new Date(
                  new Date().getTime() + +resData.expiresIn * 1000
                );
                return new AuthActions.Login({
                  email: resData.email,
                  userId: resData.localId,
                  token: resData.idToken,
                  tokenExpiration: expirationDate
                });
              }),
              // catchError(errorRes => {
              //   let errorMessage = 'An unknown error occurred!';
              //   if (!errorRes.error || !errorRes.error.error) {
              //     return of(new AuthActions.LoginFail(errorMessage));
              //   }
              //   switch (errorRes.error.error.message) {
              //     case 'EMAIL_EXISTS':
              //       errorMessage = 'This email exists already';
              //       break;
              //     case 'EMAIL_NOT_FOUND':
              //       errorMessage = 'This email does not exist.';
              //       break;
              //     case 'INVALID_PASSWORD':
              //       errorMessage = 'This password is not correct.';
              //       break;
              //   }
              //   return of(new AuthActions.LoginFail(errorMessage));
              // })
              );
            })
          );

    constructor(private actions$: Actions, private http: HttpClient){}
}