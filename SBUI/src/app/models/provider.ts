import { Department } from './department';

export class Provider {
    constructor(public name: string, public departments: Department[]) {}
}