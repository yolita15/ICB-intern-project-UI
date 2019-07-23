import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CompanyResolved } from '../models/company';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompanyService } from './company.service';

@Injectable({
    providedIn: 'root'
})
export class CompanyResolver implements Resolve<CompanyResolved> {

    constructor(private companyService: CompanyService) { }

    resolve(): Observable<CompanyResolved> {
        return this.companyService.getCompany().pipe(map(company => ({ company: company })));
    }
}