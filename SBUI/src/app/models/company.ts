import { Department } from './department';
import { User } from './user';

export class Company {
    departments: Department [];
    customer: User;

    constructor(public name: string, 
                public address: string, 
                public website: string,
                public organizationNumber: string) 
    {
        this.departments = [ new Department('Pipe', 'assets/images/departments/pipe.png'),
        new Department('Electro', 'assets/images/departments/electro.png'),
        new Department('Ventilation', 'assets/images/departments/ventilation.png'),
        new Department('Telematics', 'assets/images/departments/telematics.png'),
        new Department('Security', 'assets/images/departments/security.png'),
        new Department('Fire', 'assets/images/departments/fire.png'),
        new Department('Cooling', 'assets/images/departments/cooling.png'),
        new Department('Maintenance', 'assets/images/departments/maint.png') ]

        this.customer = new User('Kotaraka', 'Rumen')
    }
}