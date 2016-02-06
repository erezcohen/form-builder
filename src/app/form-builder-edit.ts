import {Component} from 'angular2/core';
import {Data} from "./dataService";
import {PrevieWithEdit} from "./preview/preview-with-edit";

@Component({
    selector: 'form-builder-edit',
    directives: [PrevieWithEdit],

    template: `
    <input [(ngModel)]="currentItem">
    <button (click)="addInput()">Add Input</button>
    <hr>
    <preview-with-edit></preview-with-edit>
  `
})
export class FormBuilderEdit {
    currentItem = '';

    constructor(public data:Data) {
    }

    addInput() {
        this.data.addInput(this.currentItem);
        this.currentItem = '';
    }
}
