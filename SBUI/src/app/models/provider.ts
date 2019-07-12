import { Department } from './department';

export class Provider {
    public departments: Department[];
    constructor(public name: string) {}
}