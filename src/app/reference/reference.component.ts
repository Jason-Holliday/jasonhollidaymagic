import { Component } from '@angular/core';
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-reference',
  imports: [TestimonialsComponent],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.open('Kontaktformular');
  }
}
