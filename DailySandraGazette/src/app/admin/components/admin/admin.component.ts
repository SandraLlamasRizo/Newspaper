import { Component, inject } from '@angular/core';
import { SectionsService } from '../../../servicios/sections.service';
import { NewsService } from '../../../servicios/news.service';
import { ArticleComponent } from '../../../components/article/article.component';
import { NavBarComponent } from '../../../components/nav-bar/nav-bar.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [ArticleComponent, NavBarComponent, RouterLink, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {



  private sectionsService: SectionsService = inject(SectionsService);
  private newsService: NewsService = inject(NewsService);
  public sections: any = [];
  public news: any = [];
  public revisionNews: any = [];
  public draftNews: any = [];
  public userRole: string | null = localStorage.getItem('userRole');


  getNews() {
    this.sectionsService.getSectionList().subscribe((response) => {
      this.sections = response;
      this.newsService.getNewsList().subscribe((response) => {
        this.news = response;
        this.revisionNews = this.news.filter((item: any) => item.state === 'Revision');
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
