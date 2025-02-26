import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SectionsService } from '../../../servicios/sections.service';
import { NewsService } from '../../../servicios/news.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-article',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css'
})
export class CreateArticleComponent {
  private sectionsService: SectionsService = inject(SectionsService);
  private newsService: NewsService = inject(NewsService);
  private router: Router = inject(Router);

  public sections: any = [];

  public titleValid: boolean = true;
  public subtitleValid: boolean = true;
  public imageValid: boolean = true;
  public descriptionValid: boolean = true;
  public minValid: boolean = true;
  public sectionValid: boolean = true;

  public state: string = '';

  public articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    subtitle: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    min: new FormControl('', [Validators.required, Validators.min(1)]),
    section: new FormControl('', Validators.required)
  });

  getSections() {
    this.sectionsService.getSectionList().subscribe((response) => {
      this.sections = response;
    })
  }

  ngOnInit() {
    this.getSections();
  }

  handleState(state: string) {
    this.state = state
  }

  onSubmit() {
    if (this.articleForm.valid) {
      const newArticle = { ... this.articleForm.value, state: this.state };
      this.newsService.postNews(newArticle).subscribe((response) => {
        console.log(newArticle);
        this.router.navigate(['/admin/writer']);
      });
      
    } else {
      this.titleValid = this.articleForm.controls['title'].valid;
      this.subtitleValid = this.articleForm.controls['subtitle'].valid;
      this.imageValid = this.articleForm.controls['image'].valid;
      this.descriptionValid = this.articleForm.controls['description'].valid;
      this.minValid = this.articleForm.controls['min'].valid;
      this.sectionValid = this.articleForm.controls['section'].valid;
    }
  }

  deleteArticle() {
    this.router.navigate(['/admin/writer']);
  }
}
