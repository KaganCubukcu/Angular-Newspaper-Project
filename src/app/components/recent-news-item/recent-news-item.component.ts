import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recent-news-item',
  template: `
    <div class="content-container">
      <div>{{ article.author }}</div>
      <h5>{{ article.title }}</h5>
      <p>{{ article.publishedAt }}</p>
      <section class="button-container">
        <button>Habere git</button>
      </section>
    </div>
  `,
})
export class RecentNewsItemComponent {
  @Input() article!: any;
}
