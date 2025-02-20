import { Component, inject } from '@angular/core';
import { SectionsService } from '../../servicios/sections.service';
import { RouterLink } from '@angular/router';
import { SubscriptionComponent } from '../subscription/subscription.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, SubscriptionComponent, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {


  private sectionsService: SectionsService = inject(SectionsService)
  public sections: any = [];

  public now = new Date
  public day = 0;
  public dayWeek = '';
  public month = '';
  public year = 0;

  public isModalOpen = false;

  getSections() {
    this.sectionsService.getSectionList().subscribe((response) => this.sections = response);
  }

  ngOnInit() {
    this.getSections();
  }

  openModal() {
    console.log('opening modal')
    this.isModalOpen = true
  }

  closeModal() {
    this.isModalOpen = false
  }
}
