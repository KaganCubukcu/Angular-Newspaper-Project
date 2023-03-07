import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <div class="header-container">
    <h1>Kağan Çubukçu</h1>
    <div>
      <input
        type="text"
        placeholder="Search here..."
        [(ngModel)]="InputQuery"
        (ngModelChange)="InputQueryChange($event)"
      />
    </div>
  </div>`,
})
export class HeaderComponent {
  InputQuery: string;

  @Output() InputQueryData = new EventEmitter<string>();

  InputQueryChange(event: any) {
    this.InputQueryData.emit(this.InputQuery);
  }
}
