import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private http: HttpClient = inject(HttpClient);

  getNewsList() {
    return this.http.get('http://localhost:3000/news')
  }

  getNewsBySection(section: any) {
    return this.http.get('http://localhost:3000/news', section)
  }
}
