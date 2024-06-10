import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { UserCredentials } from '../../shared/models/UserCredentials';
import { AuthResponse } from '../../shared/models/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  getSessionId(): Observable<any> {    
    const url = `${environment.BASE_URL_API}/api/Session/session-id`;
    return this.http.get<any>(url);
  }

  loginUser(credentials: UserCredentials): Observable<AuthResponse> {  
    return this.http.post<any>(`${environment.BASE_URL_API}/api/Authenticate/login-user`, credentials)
  }

  checkRoles(credentials: any): Observable<any> {
    return this.http.post<any>(`${environment.BASE_URL_API}/api/Roles/check-roles`, credentials)
  }
}
