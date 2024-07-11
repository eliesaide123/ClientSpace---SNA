import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.prod";

@Injectable({
    providedIn : 'root'
})

export class RegisterService {

    constructor(private http : HttpClient) {}

    getUser(credentials: any): Observable<any>{
        return this.http.post<any>(`${environment.BASE_URL_API}/api/Policy/get-user`, credentials)
    }
}