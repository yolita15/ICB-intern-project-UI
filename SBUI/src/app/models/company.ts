import { User } from './user';
import { Provider } from './provider';

export class Company {
    id: string;
    name: string;
    address: string;
    website: string;
    customer: User;
    customerId: string;
    organizationNumber: string;
    providers: Provider[];
}

export class CompanyResolved {
    company: Company
}