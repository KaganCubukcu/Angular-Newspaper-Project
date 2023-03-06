import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  template: ` <div className="filter-container">
    <p>Search by country name:</p>
    <select>
      <option value="tr">Turkish</option>
      <option value="us">English</option>
      <option value="kr">Korean</option>
      <option value="jp">Japanese</option>
      <option value="ru">Russian</option>
    </select>

    <p>Search by category:</p>
    <select>
      <option value="general">General</option>
      <option value="business">Business</option>
      <option value="entertainment">Entertainment</option>
      <option value="health">Health</option>
      <option value="science">Science</option>
      <option value="sports">Sports</option>
      <option value="technology">Technology</option>
    </select>
  </div>`,
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {}
