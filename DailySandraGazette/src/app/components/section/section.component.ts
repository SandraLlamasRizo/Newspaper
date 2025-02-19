import { Component, inject } from '@angular/core';
import { NewsService } from '../../servicios/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  private newsService: NewsService = inject(NewsService);
  private activatedRoute = inject(ActivatedRoute);

  news: any = []
  newsSection: any = [];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.newsService.getNewsBySection(params['section']).subscribe((response: any) => this.news = response);
      this.newsSection = this.news.filter((item: any) => item.section === params['section']);
    })
  }
}
