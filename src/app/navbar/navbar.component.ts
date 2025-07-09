import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']  
})
export class NavbarComponent {

  menuOpen = false;
  activeLink: string = '#hero';

  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.open('Kontaktformular');
  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  setActive(link: string): void {
    this.activeLink = link;
  }
  
}
