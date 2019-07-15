import { Department } from './department';
import { User } from './user';
import { Object } from './object';
import { Provider } from './provider';

export class Company {
    departments: Department[];
    providers: Provider[];
    objects: Object[];
    customer: User;
    firstDepartments: Department[] = [new Department('Electro', 'assets/images/departments/electro.png'),
    new Department('Security', 'assets/images/departments/security.png'),
    new Department('Maintenance', 'assets/images/departments/maint.png')];
    secondDepartments: Department[] = [new Department('Cooling', 'assets/images/departments/cooling.png'),
    new Department('Pipe', 'assets/images/departments/pipe.png'),
    new Department('Telematics', 'assets/images/departments/telematics.png')];

    constructor(public name: string,
        public address: string,
        public website: string,
        public organizationNumber: string) {
        this.departments = [new Department('Pipe', 'assets/images/departments/pipe.png'),
        new Department('Electro', 'assets/images/departments/electro.png'),
        new Department('Ventilation', 'assets/images/departments/ventilation.png'),
        new Department('Telematics', 'assets/images/departments/telematics.png'),
        new Department('Security', 'assets/images/departments/security.png'),
        new Department('Fire', 'assets/images/departments/fire.png'),
        new Department('Cooling', 'assets/images/departments/cooling.png'),
        new Department('Maintenance', 'assets/images/departments/maint.png')];

        this.customer = new User('Kotaraka', 'Rumen');
        this.providers = [new Provider('CHEZ', this.firstDepartments), new Provider('Sofiiska Water', this.secondDepartments)];

        this.objects = [new Object('ICB', 1), new Object('Floor1', 2), new Object('Floor2', 3), new Object('Room', 4)];
    }
}

export class CompanyResolved {
    company: Company
}