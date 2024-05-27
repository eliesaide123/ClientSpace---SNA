import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class profileService{

    constructor(private http: HttpClient) {
        
    }

    getUserAccount(credentials: any) : Observable<any>{
        return this.http.get<any>(`${environment.BASE_URL_API}/api/Authenticate/get-user`, { params: credentials })
    }
}