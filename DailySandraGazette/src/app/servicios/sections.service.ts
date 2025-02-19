import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  private http: HttpClient = inject(HttpClient);

  getSectionList() {
    return this.http.get('http://localhost:3000/sections')
  }
}
