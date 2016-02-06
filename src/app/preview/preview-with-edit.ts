import {Component} from 'angular2/core';
import {Data} from "./../dataService";
import {InputItem} from "./../input-item";

@Component({
    selector: 'preview-with-edit',
    directives: [InputItem],
    template: `
    Total Items: {{data.inputs.length}}
    <ul>
        <li *ngFor="#input of data.inputs">
            <input-item [labelToShow]="input"></input-item>
        </li>
    </ul>
  `
})
export class PrevieWithEdit {
    constructor(public data:Data) {}
}
