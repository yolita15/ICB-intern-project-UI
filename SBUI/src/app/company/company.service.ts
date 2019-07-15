import { Injectable } from '@angular/core';
import { Company } from '../models/company';

@Injectable({
    providedIn: 'root'
})

export class CompanyService {

    private company: Company = new Company('Kotaraka Rumen OOD', 'Indzhe Voyvoda 7, 1309', 'www.kotarakarumen.com', '6537495735242');
    public getCompany(): Company {
        return this.company;
    }
}