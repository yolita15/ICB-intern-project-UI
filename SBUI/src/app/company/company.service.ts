import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { Object } from 'src/app/models/object';
import { isObjectArray } from '@progress/kendo-angular-dropdowns/dist/es2015/util';

@Injectable({
    providedIn: 'root'
})

export class CompanyService {

    private company: Company = new Company('Kotaraka Rumen OOD', 'Indzhe Voyvoda 7, 1309', 'www.kotarakarumen.com', '6537495735242');
    public getCompany(): Company {
        return this.company;
    }
}