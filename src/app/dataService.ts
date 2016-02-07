
export class DataService {
    inputs:string[] = [];

    constructor() {}

    addInput(label:string) {
        this.inputs.push(label);
    }

    removeItem(indexToRemove:number):void {
        this.inputs.splice(indexToRemove, 1);
//        this.inputs = Array.from(this.inputs); // not needed?
    }
}