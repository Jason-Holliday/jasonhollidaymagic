import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private showModalSubject = new BehaviorSubject<boolean>(false);
  modal$ = this.showModalSubject.asObservable();

  private previousTitle: string | null = null;

  constructor(private titleService: Title) {}

  open(title?: string) {
    this.previousTitle = this.titleService.getTitle();
    if (title) {
      this.titleService.setTitle(`jasonhollidaymagic | ${title}`);
    }
    this.showModalSubject.next(true);
  }

  close() {
    this.showModalSubject.next(false);
    if (this.previousTitle) {
      this.titleService.setTitle(this.previousTitle);
    }
  }
}
