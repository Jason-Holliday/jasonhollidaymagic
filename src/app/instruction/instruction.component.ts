import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-instruction',
  imports: [],
  templateUrl: './instruction.component.html',
  styleUrl: './instruction.component.scss'
})
export class InstructionComponent {
    constructor(private modalService: ModalService) {}
  openModal() {
    this.modalService.open();
  }

}
