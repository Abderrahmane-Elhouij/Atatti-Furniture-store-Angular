import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay, startWith, switchMap, tap} from 'rxjs/operators';
import {of, Observable, interval, BehaviorSubject, timer, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);
  private apiService = inject(ApiService);
  private apiBaseUrl = environment.apiBaseUrl
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Initial check on app startup
    this.checkAuthStatus().subscribe();
  }

  login(credentials: any): Observable<boolean> {
    return this.apiService.login(credentials).pipe(
      tap(() => this.isAuthenticatedSubject.next(true))
    );
  }

  signup(user: { name: string; login: string; password: string; }): Observable<boolean> {
    return this.apiService.signup(user).pipe(
      tap(() => this.isAuthenticatedSubject.next(true))
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiBaseUrl}/users/logout`, null, {
      withCredentials: true // Include cookies in the request
    }).pipe(
      tap(() => {
        // Update the authentication state
        this.isAuthenticatedSubject.next(false);
      })
    );
  }

  checkAuthStatus(): Observable<boolean> {
    return this.http.get(`${this.apiBaseUrl}/users/auth-status`, {
      withCredentials: true,
      observe: 'response' // Access full response
    }).pipe(
      map(response => {
        const isAuthenticated = response.status === 204; // 204 = true
        this.isAuthenticatedSubject.next(isAuthenticated);
        return isAuthenticated;
      }),
      catchError(error => {
        if (error.status === 401) { // Explicitly handle 401
          this.isAuthenticatedSubject.next(false);
          return of(false);
        }
        // Propagate other errors
        return throwError(() => error);
      })
    );
  }

}
