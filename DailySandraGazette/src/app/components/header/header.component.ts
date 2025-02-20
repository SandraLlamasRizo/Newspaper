import { Component, inject } from '@angular/core';
import { SectionsService } from '../../servicios/sections.service';
import { RouterLink } from '@angular/router';
import { SubscriptionComponent } from "../subscription/subscription.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, SubscriptionComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  

  public now = new Date
  public day = 0;
  public dayWeek = '';
  public month = '';
  public year = 0;

  public isModalOpen = false;


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

 

  ngOnInit() {
    this.getDate();
  }

  openModal() {
    console.log('opening modal')
    this.isModalOpen = true
  }

  closeModal() {
    
    this.isModalOpen = false
  }
}
