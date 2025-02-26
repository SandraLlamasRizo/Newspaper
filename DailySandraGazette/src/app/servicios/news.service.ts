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

  getNewsById(id: any) {
    return this.http.get('http://localhost:3000/news/'+ id);
  }

  getNewsBySection(section: any) {
    return this.http.get('http://localhost:3000/news', section)
  }

  postNews(article: any) {
    return this.http.post('http://localhost:3000/news', article);
  }

  updateNews(id: any, article: any ) {
    return this.http.put('http://localhost:3000/news/' + id, article);
  }

  deleteNews(id: any) {
    return this.http.delete('http://localhost:3000/news/' + id);
  }
}
