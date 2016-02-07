import {Component} from 'angular2/core';
import {DataService} from "./dataService";
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

    constructor(public data:DataService) {}

    addInput() {
        this.data.addInput(this.currentItem);
        this.currentItem = '';
    }
}
