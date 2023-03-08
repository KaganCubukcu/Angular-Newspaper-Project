import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: ` <nav class="navbar-container">
    <ul class="categories-ul">
      <li routerLink="/" routerLinkActive="active">HOME</li>
      <li routerLink="/categories" routerLinkActive="active">CATEGORIES</li>
      <li routerLink="/business" (click)="onCategorySelected('business')">
        BUSINESS
      </li>
      <li routerLink="/general" (click)="onCategorySelected('general')">
        GENERAL
      </li>
      <li routerLink="/health" (click)="onCategorySelected('health')">
        HEALTH
      </li>
      <li
        routerLink="/entertainment"
        (click)="onCategorySelected('entertainment')"
      >
        ENTERTAINMENT
      </li>
      <li routerLink="/sports" (click)="onCategorySelected('sports')">
        SPORTS
      </li>
      <li routerLink="/technology" (click)="onCategorySelected('technology')">
        TECHNOLOGY
      </li>
    </ul>
  </nav>`,
})
export class NavbarComponent {
  @Output() categorySelected = new EventEmitter<string>();

  onCategorySelected(category: string) {
    this.categorySelected.emit(category);
  }
}
