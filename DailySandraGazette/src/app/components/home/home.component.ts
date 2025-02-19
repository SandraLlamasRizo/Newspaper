import { Component, inject } from '@angular/core';
import { SectionsService } from '../../servicios/sections.service';
import { NewsService } from '../../servicios/news.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private sectionsService: SectionsService = inject(SectionsService);
  private newsService: NewsService = inject(NewsService);
  public sections: any = [];

  public news: any = []


  getSections() {
    this.sectionsService.getSectionList().subscribe((response) => this.sections = response);
  }

  getNews() {
    this.newsService.getNewsList().subscribe((response) => this.news = response);
  }

  ngOnInit() {
    this.getSections();
    this.getNews();
  }
}
