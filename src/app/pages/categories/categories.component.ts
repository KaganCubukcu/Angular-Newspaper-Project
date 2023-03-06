import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/api/news-api.services';

@Component({
  selector: 'app-categories',
  template: `
    <app-header></app-header>
    <app-navbar></app-navbar>
    <app-filter
      (countryChanged)="onCountryChanged($event)"
      (categoryChanged)="onCategoryChanged($event)"
    ></app-filter>
    <section class="content-title">
      <h4>{{ category | titlecase }} News</h4>
    </section>
    <div *ngFor="let article of articles | slice : 0 : 5">
      <app-recent-news-item [article]="article"></app-recent-news-item>
    </div>
  `,
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  articles: any[] = [];
  page: number;
  country: string;
  category: string;

  constructor(private newsService: NewsService) {
    this.country = 'tr';
    this.category = 'general';
    this.page = 1;
  }

  ngOnInit() {
    this.getNews();
    console.log(this.articles);
  }

  onCountryChanged(country: string) {
    this.country = country;
    this.getNews();
  }

  onCategoryChanged(category: string) {
    this.category = category;
    this.getNews();
  }

  getNews() {
    this.newsService
      .getNews(this.country, this.category, this.page)
      .subscribe((data) => {
        this.articles = data.articles;
      });
  }
}
