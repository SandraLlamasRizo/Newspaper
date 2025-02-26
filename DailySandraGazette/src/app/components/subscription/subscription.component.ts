import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subscription',
  imports: [],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

  @Input() isOpen: boolean = false;  // Controls visibility
  @Output() closeModalEvent = new EventEmitter<void>(); // Emits when closing

  closeModal() {
    this.closeModalEvent.emit();
  }

  submitForm() {
    console.log("Form submitted!");
    this.closeModal();
  }

}
