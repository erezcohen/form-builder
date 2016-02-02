import {Component} from 'angular2/core';
import {Data} from "./dataService";

@Component({
    selector: 'form-builder-edit',
//    providers: [Data],
    template: `
    <input [(ngModel)]="currentItem">
    <button (click)="addInput()">Add Input</button>
    <!--<button (click)="Data.addInput()">Add Input</button>-->

  `
})

export class FormBuilderEdit {
    currentItem = '';

    constructor(public data:Data) {}

    addInput() {
        this.data.addInput(this.currentItem);
        this.currentItem = '';
    }
}
