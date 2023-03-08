import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/api/news-api.services';

@Component({
  selector: 'app-category-detail',
  template: `
    <app-header (InputQueryData)="onInputQueryData($event)"></app-header>
    <app-navbar (categorySelected)="onCategorySelected($event)"></app-navbar>
    <p class="category-name-header">{{ category | titlecase }} News</p>
    <div *ngFor="let article of articlesToDisplay">
      <app-recent-news-item [article]="article"></app-recent-news-item>
    </div>
    <div *ngIf="numPages > 1" class="button-container">
      <button (click)="prevPage()" [disabled]="currentPage === 1">
        Previous Page
      </button>
      <span>Page {{ currentPage }} of {{ numPages }}</span>
      <button (click)="nextPage()" [disabled]="currentPage === numPages">
        Next Page
      </button>
    </div>
  `,
})
export class CategoryDetailComponent implements OnInit {
  articles: any[] = [];

  currentPage = 1;
  numPages = 1;
  country: string;
  category: string;
  totalResults: number;
  InputQuery: string;

  onInputQueryData(data: string) {
    this.InputQuery = data;
  }
  constructor(private newsService: NewsService, private route: ActivatedRoute) {
    this.country = 'tr';
    this.category = 'general';
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.getNews();
    });
  }

  onCategorySelected(category: string) {
    this.category = category;
    this.getNews();
  }

  getNews() {
    this.newsService
      .getNews(this.country, this.category, this.currentPage)
      .subscribe((data) => {
        this.articles = data.articles;
        this.totalResults = data.totalResults;
        this.numPages = Math.ceil(this.totalResults / 20);
      });
  }

  get articlesToDisplay() {
    const startIndex = 0;
    const endIndex = startIndex + 20;
    let articlesToDisplay = this.articles.slice(startIndex, endIndex);

    if (this.InputQuery) {
      articlesToDisplay = articlesToDisplay.filter((article) =>
        article.title.toLowerCase().includes(this.InputQuery.toLowerCase())
      );
    }

    return articlesToDisplay;
  }

  prevPage() {
    this.currentPage--;
    this.getNews();
  }

  nextPage() {
    this.currentPage++;
    this.getNews();
  }
}
