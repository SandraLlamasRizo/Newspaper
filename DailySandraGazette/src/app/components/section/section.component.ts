import { Component, inject } from '@angular/core';
import { NewsService } from '../../servicios/news.service';
import { ActivatedRoute } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-section',
  imports: [NavBarComponent, ArticleComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  private newsService: NewsService = inject(NewsService);
  private activatedRoute = inject(ActivatedRoute);

  public item: any = ''

  public news: any = [];
  public newsSection: any = [];
  public section: string = '';
  public publishedNews: any = [];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.newsService.getNewsBySection(params['section']).subscribe((response: any) => {
        this.news = response;
        this.section = params['section'];
        this.newsSection = this.news.filter((item: any) => item.section === params['section']);
        this.publishedNews = this.newsSection.filter((item: any) => item.state === 'Published');
      })
    })
  }
}
