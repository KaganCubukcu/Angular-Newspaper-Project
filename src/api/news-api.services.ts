import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(country: string, category: string, page: number): Observable<any> {
    const apiKey = 'e29abe99c41f4dfb92863f94efcacc8b';
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}`;

    return this.http.get(url);
  }
}
