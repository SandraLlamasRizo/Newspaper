import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  imports: [RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  @Input() item: any = '';
  @Input() userRole: any = '';

  ngOnInit() {
    console.log(this.userRole)
  }

  setId(id: any) {
    localStorage.setItem('articleId', id);
  }

}
