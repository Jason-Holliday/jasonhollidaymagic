import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.open('Kontaktformular');
  }
}
