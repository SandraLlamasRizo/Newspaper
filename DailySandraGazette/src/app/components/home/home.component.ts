import { Component, inject } from '@angular/core';
import { SectionsService } from '../../servicios/sections.service';
import { NewsService } from '../../servicios/news.service';
import { ArticleComponent } from '../article/article.component';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-home',
  imports: [ArticleComponent, RouterLink, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private sectionsService: SectionsService = inject(SectionsService);
  private newsService: NewsService = inject(NewsService);
  public sections: any = [];
  public news: any = [];
  public publishedNews: any = [];
  public userRole: string | null = localStorage.getItem('userRole');


  getNews() {
    this.sectionsService.getSectionList().subscribe((response) => {
      this.sections = response;
      this.newsService.getNewsList().subscribe((response) => {
        this.news = response;
        this.publishedNews = this.news.filter((item: any) => item.state === 'Published')
        console.log(this.news);
      })
    })
  }

  ngOnInit() {
    this.getNews();
  }

  recibir(evento: any) {
    this.userRole = evento;
  }
}
