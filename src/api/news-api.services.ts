import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(country: string, category: string, page: number) {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e29abe99c41f4dfb92863f94efcacc8b&page=${page}`
    );
  }
}
