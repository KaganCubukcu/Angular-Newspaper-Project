import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/api/news-api.services';

@Component({
  selector: 'app-recent-news',
  template: `
    <div *ngFor="let article of articles | slice : 0 : 5">
      <div class="content-container">
        <div>{{ article.author }}</div>
        <h5>{{ article.title }}</h5>
        <p>{{ article.publishedAt }}</p>
        <section class="button-container">
          <button>Habere git</button>
        </section>
      </div>
    </div>
  `,
  styleUrls: ['./recent-news.component.css'],
})
export class RecentNewsComponent implements OnInit {
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
