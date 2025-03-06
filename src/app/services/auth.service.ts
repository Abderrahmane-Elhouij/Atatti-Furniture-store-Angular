import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    // Ensure credentials are sent so the browser can store the HttpOnly cookie
    return this.http.post(`${this.apiUrl}/users/login`, credentials, { withCredentials: true })
      .pipe(
        map((res: any) => {
          // console.log('Login successful', res);
          // No need to manually store the token since it is handled by the browser's cookie storage.
          return res;
        })
      );
  }

  // Option 1: Check login status by calling a protected endpoint
  isLoggedIn(): Observable<boolean> {
    return this.http.get(`${this.apiUrl}/test`, { withCredentials: true }).pipe(
      map(() => true),
      catchError(() => of(false)) 
    );
  }

  // logout() {
  //   // To log out, you'll typically need to clear the cookie on the server side.
  //   // For example, call a logout endpoint that instructs the backend to clear the cookie.
  //   return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true });
  // }
}
