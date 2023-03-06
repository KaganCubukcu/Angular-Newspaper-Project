import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <app-navbar></app-navbar>
    <app-recent-news></app-recent-news>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
