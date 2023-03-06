import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/api/news-api.services';

@Component({
  selector: 'app-category-detail',
  template: `
    <app-header></app-header>
    <app-navbar (categorySelected)="onCategorySelected($event)"></app-navbar>
    <div *ngFor="let article of articles">
      <app-recent-news-item [article]="article"></app-recent-news-item>
    </div>
  `,
  styleUrls: ['./category-detail.component.css'],
})
export class CategoryDetailComponent implements OnInit {
  articles: any[] = [];
  page: number;
  country: string;
  category: string;

  constructor(private newsService: NewsService, private route: ActivatedRoute) {
    this.country = 'tr';
    this.category = 'general';
    this.page = 1;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      console.log('Category:', this.category);
      this.getNews();
    });
  }
  onCategorySelected(category: string) {
    this.category = category;
    console.log('Category Selected:', this.category);
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
