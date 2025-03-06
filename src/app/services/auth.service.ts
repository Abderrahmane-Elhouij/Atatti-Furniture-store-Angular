import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    // Ensure credentials are sent so the browser can store the HttpOnly cookie
    return this.http.post(`${this.apiUrl}/login`, credentials, { withCredentials: true })
      .pipe(
        map((res: any) => {
          console.log('Login successful', res);
          // No need to manually store the token since it is handled by the browser's cookie storage.
          return res;
        })
      );
  }

  // Option 1: Check login status by calling a protected endpoint
  // isLoggedIn() {
  //   // For example, if you have an endpoint that returns user details when authenticated:
  //   return this.http.get(`${this.apiUrl}/profile`, { withCredentials: true });
  // }

  // logout() {
  //   // To log out, you'll typically need to clear the cookie on the server side.
  //   // For example, call a logout endpoint that instructs the backend to clear the cookie.
  //   return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true });
  // }
}
