import { Component, inject } from '@angular/core';
import { SectionsService } from '../../../servicios/sections.service';
import { NewsService } from '../../../servicios/news.service';
import { NavBarComponent } from '../../../components/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';
import { ArticleComponent } from '../../../components/article/article.component';

@Component({
  selector: 'app-writer',
  imports: [NavBarComponent, RouterLink, ArticleComponent],
  templateUrl: './writer.component.html',
  styleUrl: './writer.component.css'
})
export class WriterComponent {


  private sectionsService: SectionsService = inject(SectionsService);
  private newsService: NewsService = inject(NewsService);
  public sections: any = [];
  public news: any = [];
  public draftNews: any = [];
  public userRole: string | null = localStorage.getItem('userRole');


  getNews() {
    this.sectionsService.getSectionList().subscribe((response) => {
      this.sections = response;
      this.newsService.getNewsList().subscribe((response) => {
        this.news = response;
        this.draftNews = this.news.filter((item: any) => item.state === 'Draft')
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
