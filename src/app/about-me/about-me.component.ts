import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.open('Kontaktformular');
  }
}
