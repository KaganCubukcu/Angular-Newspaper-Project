import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/api/news-api.services';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <app-navbar></app-navbar>
    <app-recent-news [articles]="articles"></app-recent-news>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articles: any[] = [];
  page = 1;
  constructor(private newsService: NewsService) {}
  ngOnInit() {
    this.getNews();
  }
  getNews() {
    const country = 'tr';
    const category = 'general';

    this.newsService.getNews(country, category, this.page).subscribe((data) => {
      this.articles = this.articles.concat(data.articles);
    });
  }
}
