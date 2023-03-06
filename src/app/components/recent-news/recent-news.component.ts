import { Component, Input, OnInit } from '@angular/core';
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
  ngOnInit(): void {}
  @Input()
  articles!: any[];
}
