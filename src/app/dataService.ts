

export class Data {
    inputs:string[] = [];

    addInput(label:string) {
        this.inputs.push(label);
        console.log(this.inputs);
    }
}
