import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);
  private apiService = inject(ApiService);
  private apiBaseUrl = environment.apiBaseUrl;

  login(credentials: any) {
    return this.apiService.login(credentials);
  }

  signup(user: { name: string; login: string; password: string; }) {
    return this.apiService.signup(user);
  }


  // Option 1: Check login status by calling a protected endpoint
  isLoggedIn(): Observable<boolean> {
    return this.http.get(`${this.apiBaseUrl}/test`, { withCredentials: true }).pipe(
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
