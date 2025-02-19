import { Component, inject } from '@angular/core';
import { SectionsService } from '../../servicios/sections.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private sectionsService: SectionsService = inject(SectionsService)
  public sections: any = [];

  public now = new Date
  public day = 0;
  public dayWeek = '';
  public month = '';
  public year = 0;


  getDate() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dayNum = this.now.getDay();
    const monthNum = this.now.getMonth();

    this.day = this.now.getDate();
    this.dayWeek = dayNames[dayNum];
    this.month = monthNames[monthNum];
    this.year = this.now.getFullYear(); 
  }

  getSections() {
    this.sectionsService.getSectionList().subscribe((response) => this.sections = response);
  }

  ngOnInit() {
    this.getDate();
    this.getSections();
  }

}
