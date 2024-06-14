import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetPortfolio } from "../../shared/models/GetPortfolio";
import { environment } from "../../../environments/environment.prod";

@Injectable()
export class ClientPolicies{
    
    constructor(private http: HttpClient) {}

    getPotfolio(data: GetPortfolio): Observable<any>{        
        return this.http.post<any>(`${environment.BASE_URL_API}/api/Authenticate/get-client-info`, data)
    }
}