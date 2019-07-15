import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CompanyResolved } from '../models/company';
import { Observable, of } from 'rxjs';
import { CompanyService } from './company.service';

@Injectable({
    providedIn: 'root'
})
export class CompanyResolver implements Resolve<CompanyResolved> {

    constructor(private companyService: CompanyService) { }

    resolve(): Observable<CompanyResolved> {
        return of({ company: this.companyService.getCompany() });
    }
}