import {Component} from 'angular2/core';
import {Data} from "./dataService";
import {InputItem} from "./input-item";

@Component({
    selector: 'form-builder-preview',
    directives: [InputItem],
    template: `
    {{data.inputs.length}}
    <ul>
        <li *ngFor="#inputItem of data.inputs">
            <input-item [labelToShow]="inputItem"></input-item>
        </li>
    </ul>
  `
})

export class FormBuilderPreview {
    constructor(public data:Data) {

    }
}
