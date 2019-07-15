import { Type, Provider } from '@angular/compiler/src/core';
import { Tfm } from './tfm';
import { User } from './user';
import { Department } from './department';

export class Object {
    type: Type;
    tfm: Tfm;
    objectIdentifier: string;
    longitude: number;
    latitude: number;
    responsiblePerson: User;
    responsibleDevPerson: User;
    providers: Provider[];
    departments: Department[];
    parentId: number;
    
    constructor(public name: string, public id: number) { }
}

export class ObjectResolved {
    object: Object;
}