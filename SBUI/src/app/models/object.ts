import { Tfm } from './tfm';
import { ObjectType } from './object-type';
import { Company } from './company';
import { Department } from './department';
import { User } from './user';

export interface IObject {
    id: string;
    parentId: string;
    name: string;
    type: ObjectType;
    tfm: Tfm;
}

export class Object implements IObject {
    id: string;
    parentId: string;
    name: string;
    comment: string;
    path: string;
    imageName: string;
    company: Company;
    type: ObjectType;
    tfm: Tfm;
    tfmId: string;
    objectIdentifier: string;
    latitude: number;
    longitude: number;
    users: User[];
    departments: Department[];
}