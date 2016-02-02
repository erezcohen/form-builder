import {Component, Input} from 'angular2/core';

@Component({
    selector: 'input-item',
    template: `
    <label>{{labelToShow}}
        <input type="text">
    </label>
  `
})

export class InputItem {
    @Input() labelToShow:string;
}

