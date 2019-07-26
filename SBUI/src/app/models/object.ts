import { Type, Provider } from '@angular/compiler/src/core';
import { Tfm } from './tfm';
import { User } from './user';
import { Department } from './department';
import { ObjectType } from './object-type';
import { Company } from './company';

export interface IObject {
    id: string;
    parentId: string;
    name: string;
}

export class Object implements IObject {
    id: string;
    parentId: string;
    name: string;
    company: Company;
    type: ObjectType;
    tfm: Tfm;
    objectIdentifier: string;
    latitude: number;
    longitude: number;
}