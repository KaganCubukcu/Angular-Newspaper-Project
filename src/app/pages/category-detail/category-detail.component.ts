import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/api/news-api.services';

@Component({
  selector: 'app-category-detail',
  template: `
    <app-header (InputQueryData)="onInputQueryData($event)"></app-header>
    <app-navbar (categorySelected)="onCategorySelected($event)"></app-navbar>
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
  styleUrls: ['./category-detail.component.css'],
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
    console.log('Constructor called');
    this.country = 'tr';
    this.category = 'general';
  }

  ngOnInit() {
    console.log('ngOnInit called');
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      console.log('Category:', this.category);
      this.getNews();
    });
  }

  onCategorySelected(category: string) {
    console.log('onCategorySelected called');
    this.category = category;
    console.log('Category Selected:', this.category);
    this.getNews();
  }

  getNews() {
    console.log('getNews called with page:', this.currentPage);
    this.newsService
      .getNews(this.country, this.category, this.currentPage)
      .subscribe((data) => {
        console.log('News data received for page:', this.currentPage);
        this.articles = data.articles;
        this.totalResults = data.totalResults;
        this.numPages = Math.ceil(this.totalResults / 20);
        console.log('Articles:', this.articles);
        console.log('Total Results:', this.totalResults);
        console.log('Num pages:', this.numPages);
      });
  }

  get articlesToDisplay() {
    console.log('articlesToDisplay called');
    const startIndex = (this.currentPage - 1) * 20;
    const endIndex = startIndex + 20;
    let articlesToDisplay = this.articles.slice(startIndex, endIndex);

    if (this.InputQuery) {
      articlesToDisplay = articlesToDisplay.filter((article) =>
        article.title.toLowerCase().includes(this.InputQuery.toLowerCase())
      );
    }

    console.log('startIndex:', startIndex);
    console.log('endIndex:', endIndex);
    console.log('articlesToDisplay:', articlesToDisplay);
    return articlesToDisplay;
  }

  prevPage() {
    console.log('prevPage called');
    this.currentPage--;
    this.getNews();
  }

  nextPage() {
    console.log('nextPage called');
    this.currentPage++;
    this.getNews();
  }
}
