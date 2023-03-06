import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: ` <nav class="navbar-container">
    <ul class="categories-ul">
      <li routerLink="/" routerLinkActive="active">HOME</li>
      <li routerLink="/categories" routerLinkActive="active">CATEGORIES</li>
      <li routerLink="/business" routerLinkActive="active">BUSINESS</li>
      <li routerLink="/general" routerLinkActive="active">GENERAL</li>
      <li routerLink="/health" routerLinkActive="active">HEALTH</li>
      <li routerLink="/entertainment" routerLinkActive="active">
        ENTERTAINMENT
      </li>
      <li routerLink="/sports" routerLinkActive="active">SPORTS</li>
      <li routerLink="/technology" routerLinkActive="active">TECHNOLOGY</li>
      <li routerLink="/about" routerLinkActive="active">ABOUT</li>
    </ul>
  </nav>`,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {}
