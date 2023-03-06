import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <div class="header-container">
    <h1>Kağan Çubukçu</h1>
    <div>
      <input type="text" placeholder="Search here..." />
    </div>
  </div>`,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
