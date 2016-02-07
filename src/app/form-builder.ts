import {Component} from 'angular2/core';
import {RouterOutlet, RouterLink, RouteConfig} from 'angular2/router';

import {FormBuilderEdit} from './form-builder-edit';
import {FormBuilderPreview} from './preview/form-builder-preview';

import {DataService} from "./dataService";



@RouteConfig([
    {path: '/edit', name: 'Edit', component: FormBuilderEdit, useAsDefault: true},
    {path: '/preview', name: 'Preview', component: FormBuilderPreview}
])
@Component({
    selector: 'form-builder-app',
    providers: [DataService],
    directives: [RouterOutlet, RouterLink],
    template: `
    <nav>
        <a [routerLink]="['Edit']">Edit</a>
        <a [routerLink]="['Preview']">Preview</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class FormBuilderApp {
}
