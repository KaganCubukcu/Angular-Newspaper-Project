import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/api/news-api.services';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
