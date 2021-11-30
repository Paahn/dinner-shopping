import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { environment } from '../../environments/environment.custom';

import { User } from "./user.model";

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn:'root' })
export class AuthService {
  public user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  public signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
        environment.MSAL.API_URL_SIGNUP,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    )
    .pipe
      (
        catchError(this.handleError),
        tap(data => {
          this.handleAuthentication(
            data.email,
            data.localId,
            data.idToken,
            +data.expiresIn
          );
        })
      );
  }

  public signIn(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      environment.MSAL.API_URL_SIGNIN,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe
    (
      catchError(this.handleError),
      tap(data => {
        this.handleAuthentication(
          data.email,
          data.localId,
          data.idToken,
          +data.expiresIn
        );
      })
    );
  }

  public autoSignIn(): void {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
    }
  }

  public signOut(): void {
    this.user.next(null);
    this.router.navigate(['/auth']);

    localStorage.removeItem('userData');
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(
      email,
      userId,
      token,
      expirationDate
    );
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = 'An unknown error occured';
    if (!error.error || !error.error.error) {
        return throwError(errorMessage);
    }
    switch (error.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'A user with this email already exists.';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'Email not found. Please sign up first!';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Wrong password. Please try again!';
          break;
      }
    return throwError(errorMessage);
  }
}
