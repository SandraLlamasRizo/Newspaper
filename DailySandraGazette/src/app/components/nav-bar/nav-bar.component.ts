import { Component, EventEmitter, inject, Output } from '@angular/core';
import { SectionsService } from '../../servicios/sections.service';
import { Router, RouterLink } from '@angular/router';
import { SubscriptionComponent } from '../subscription/subscription.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, SubscriptionComponent, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  private router: Router = inject(Router);
  private sectionsService: SectionsService = inject(SectionsService);
  public sections: any = [];

  public now = new Date
  public day = 0;
  public dayWeek = '';
  public month = '';
  public year = 0;

  public isModalOpen = false;

  public userRole: string | null = localStorage.getItem('userRole');

  @Output() enviar: EventEmitter<any> = new EventEmitter()

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
  logout() {
    localStorage.removeItem('userRole');
    this.userRole = null;
    this.enviar.emit(this.userRole)
    this.router.navigate(['/home']);
  }
}
