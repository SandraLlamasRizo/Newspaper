import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SectionsService } from '../../../servicios/sections.service';
import { NewsService } from '../../../servicios/news.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css'
})
export class EditArticleComponent {

  private sectionsService: SectionsService = inject(SectionsService);
  private newsService: NewsService = inject(NewsService);
  private router: Router = inject(Router);

  public titleValid: boolean = true;
  public subtitleValid: boolean = true;
  public imageValid: boolean = true;
  public descriptionValid: boolean = true;
  public minValid: boolean = true;
  public sectionValid: boolean = true;
  public sections: any = [];
  public userRole: string | null = localStorage.getItem('userRole');
  public articleId: string | null = localStorage.getItem('articleId');
  public state: string = '';

  public draftButton: string = '';
  public revisionButton: string = '';

  public prueba: any = '';

  public editForm = new FormGroup({
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

  getId() {
    this.newsService.getNewsById(this.articleId).subscribe((response) => this.editForm.patchValue(response))
  }

  setButtonsText() {
    if (this.userRole === 'writer') {
      this.draftButton = 'Save Draft';
      this.revisionButton = 'Send to Revision';
    } else if (this.userRole === 'editor') {
      this.draftButton = 'Send back to Draft';
      this.revisionButton = 'Save Revision';
    }
  }

  ngOnInit() {
    this.getSections();
    this.getId();
    this.setButtonsText();
  }

  handleState(state: string) {
    this.state = state;
  }

  onSubmit() {
    if (this.editForm.valid) {
      const editArticle = { ... this.editForm.value, state: this.state };
      this.newsService.updateNews(this.articleId, editArticle).subscribe((response) => {
        this.router.navigate(['/admin', this.userRole]);
        localStorage.setItem('articleId', '');
      });
      
    } else {
      this.titleValid = this.editForm.controls['title'].valid;
      this.subtitleValid = this.editForm.controls['subtitle'].valid;
      this.imageValid = this.editForm.controls['image'].valid;
      this.descriptionValid = this.editForm.controls['description'].valid;
      this.minValid = this.editForm.controls['min'].valid;
      this.sectionValid = this.editForm.controls['section'].valid;
    }
  }

  deleteArticle() {
    this.newsService.deleteNews(this.articleId).subscribe((response) => this.router.navigate(['/admin', this.userRole]))
  }
  
}


