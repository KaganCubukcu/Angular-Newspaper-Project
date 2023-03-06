import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/api/news-api.services';

@Component({
  selector: 'app-root',
  template: ` <app-home></app-home> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private newsService: NewsService) {}
  ngOnInit() {
    this.newsService.getNews('tr', 'general', 1).subscribe((data) => {
      console.log(data);
      // verileri burada kullanabilirsiniz
    });
  }
}
