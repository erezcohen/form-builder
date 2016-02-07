import {Component} from 'angular2/core';
import {DataService} from "./../dataService";
import {InputItem} from "./../input-item";

@Component({
    selector: 'preview-with-edit',
    directives: [InputItem],
    template: `
    Total Items: {{data.inputs.length}}
    <ul>
        <li *ngFor="#input of data.inputs; #i = index">
            <input-item [labelToShow]="input"></input-item>
            <button (click)="remove(i)">Remove</button>
        </li>
    </ul>
  `
})
export class PrevieWithEdit {
    constructor(public data:DataService) {}

    remove(indexToRemove) {
        this.data.removeItem(indexToRemove);
    }
}
