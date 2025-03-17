import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay, startWith, switchMap, tap} from 'rxjs/operators';
import {of, Observable, interval, BehaviorSubject, timer, throwError, Subscription} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {ApiService} from './api.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);
  private apiService = inject(ApiService);
  private router = inject(Router);
  private apiBaseUrl = environment.apiBaseUrl
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  username = signal<string>("");

  constructor() {
    // Initial check on app startup
    this.checkAuthStatus().subscribe();
  }

  login(credentials: any): Subscription {
    return this.apiService.login(credentials).pipe(
      tap(() => this.isAuthenticatedSubject.next(true))
    ).subscribe({
      next: (res) => {
        this.username.set(res.name);
        // Navigate to your dashboard or home page on success
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
        alert('Invalid credentials');
      },
    });
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
