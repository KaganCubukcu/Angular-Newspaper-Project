import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/api/news-api.services';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <app-navbar></app-navbar>
    <div *ngFor="let article of articles">
      <app-recent-news-item [article]="article"></app-recent-news-item>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  articles: any[] = [];

  constructor(private newsService: NewsService) {}
  ngOnInit() {
    this.getNews();
  }
  getNews() {
    const country = 'tr';
    const category = 'general';
    const page = 1;
    this.newsService.getNews(country, category, page).subscribe((data) => {
      this.articles = this.articles.concat(data.articles);
    });
  }
}
