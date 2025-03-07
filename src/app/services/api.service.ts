import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBaseUrl = environment.apiBaseUrl;
  private http = inject(HttpClient);

  login(credentials: any) {
    // Ensure credentials are sent so the browser can store the HttpOnly cookie
    return this.http.post(`${this.apiBaseUrl}/users/login`, credentials, { withCredentials: true })
      .pipe(
        map((res: any) => {
          // No need to manually store the token since it is handled from the backend by the browser's cookie storage.
          return res;
        })
      );
  }

  signup(user: { name: string; login: string; password: string; }) {
    return this.http.post(`${this.apiBaseUrl}/users/register`, user)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

}
