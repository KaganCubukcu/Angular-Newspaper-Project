import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  template: `
    <app-header></app-header>
    <app-navbar></app-navbar>
    <app-filter></app-filter>
  `,
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {}
