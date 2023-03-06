import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-news-item',
  template: `
    <div class="content-container">
      <div>{{ article.author }}</div>
      <h5>{{ article.title }}</h5>
      <p>{{ article.publishedAt | fixData }}</p>

      <section class="section-link-container ">
        <a href="{{ article.url }}" target="_blank" class="section-link"
          >Habere git</a
        >
      </section>
    </div>
  `,
})
export class RecentNewsItemComponent {
  @Input() article!: any;
}
