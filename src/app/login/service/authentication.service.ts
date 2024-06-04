import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  getSessionId(): Observable<any>{
    debugger
    const url = `${environment.BASE_URL_API}/api/Session/session-id`;
    return this.http.get<any>(url);
  }

  loginUser(credentials: any): Observable<any> {
    debugger
      return this.http.post<any>(`${environment.BASE_URL_API}/api/Authenticate/login-user`, credentials)
  }

}
