export class Tfm {
    public displayInformation: string;
    constructor(public name: string, public code: string) 
    { 
        this.displayInformation = `${code} ${name}`
    }
}