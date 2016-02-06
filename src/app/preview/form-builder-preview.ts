import {Component} from 'angular2/core';
import {Data} from "./../dataService";
import {InputItem} from "./../input-item";

@Component({
    selector: 'form-builder-preview',
    directives: [InputItem],
    styleUrls: ['app/preview/preview-with-edit.css'],
    template: `
    <ul>
        <li *ngFor="#input of data.inputs">
            <input-item [labelToShow]="input" [hidden]="input.startsWith('s')"></input-item>
        </li>
    </ul>
  `
})

export class FormBuilderPreview {
    constructor(public data:Data) {}
}
