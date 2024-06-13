
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.prod";
import { HttpClient } from "@angular/common/http";
import { getClientInfo } from "../../shared/models/GetClientInfo";

@Injectable({
    providedIn: 'root'
})
export class ClientPoliciesService {

    constructor(private http: HttpClient) { }

    getClientPolicies(credentials: any): Observable<any> {
        return this.http.post<any>(`${environment.BASE_URL_API}/api/Policy/get-policy-details`, credentials)
    }

    getPorfolio(credentials: any): Observable<any>{        
        return this.http.post<any>(`${environment.BASE_URL_API}/api/Portfolio/get-portfolio`, credentials)
    }

    getClientInfo(credentials: getClientInfo): Observable<any>{        
        return this.http.post<any>(`${environment.BASE_URL_API}/api/Authenticate/get-client-info`, credentials)
    }

}