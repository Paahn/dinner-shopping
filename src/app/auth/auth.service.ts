import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment.custom';

@Injectable({ providedIn:'root' })
export class AuthService {
    constructor(private http: HttpClient) {}

    public signUp(email: string, password: string) {
        return this.http.post(environment.MSAL.API_URL_SIGNUP,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
    }
}