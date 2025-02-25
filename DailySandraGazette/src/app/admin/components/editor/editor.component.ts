import { Component, inject } from '@angular/core';
import { SectionsService } from '../../../servicios/sections.service';
import { NewsService } from '../../../servicios/news.service';
import { NavBarComponent } from '../../../components/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';
import { ArticleComponent } from '../../../components/article/article.component';

@Component({
  selector: 'app-editor',
  imports: [NavBarComponent, RouterLink, ArticleComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {


  private sectionsService: SectionsService = inject(SectionsService);
  private newsService: NewsService = inject(NewsService);
  public sections: any = [];
  public news: any = [];
  public revisionNews: any = [];
  public userRole: string | null = localStorage.getItem('userRole');


  getNews() {
    this.sectionsService.getSectionList().subscribe((response) => {
      this.sections = response;
      this.newsService.getNewsList().subscribe((response) => {
        this.news = response;
        this.revisionNews = this.news.filter((item: any) => item.state === 'Revision')
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
