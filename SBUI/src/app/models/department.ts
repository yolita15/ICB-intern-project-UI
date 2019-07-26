import { Provider } from '@angular/core/src/render3/jit/compiler_facade_interface';

export class Department {
    id: string;
    name: string;
    providerId: string;
    provider: Provider;
}