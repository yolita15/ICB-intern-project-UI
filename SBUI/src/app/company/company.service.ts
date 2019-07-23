import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CompanyService {

    private headers: HttpHeaders;
    private accessPointUrl: string = 'http://localhost:49419/api/company';

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    }

    public getCompany(): Observable<Company> {
        return this.http.get<Company>(this.accessPointUrl, { headers: this.headers });
    }
}