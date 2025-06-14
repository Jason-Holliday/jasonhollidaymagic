import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private showModalSubject = new BehaviorSubject<boolean>(false);
  modal$ = this.showModalSubject.asObservable();

  private previousTitle: string | null = null;

  constructor(private titleService: Title) { }

  open(title?: string) {
    this.previousTitle = this.titleService.getTitle();
    if (title) {
      this.titleService.setTitle(`jasonhollidaymagic | ${title}`);
    }

    const scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add('modal-open');
    document.body.dataset['scrollY'] = scrollY.toString();

    this.showModalSubject.next(true);
  }


  close() {
    this.showModalSubject.next(false);

    if (this.previousTitle) {
      this.titleService.setTitle(this.previousTitle);
    }

    const scrollY = document.body.dataset['scrollY'];
    if (scrollY) {
      document.body.style.top = '';
      document.body.classList.remove('modal-open');
      window.scrollTo(0, parseInt(scrollY));
      delete document.body.dataset['scrollY'];
    } else {
      document.body.classList.remove('modal-open');
    }
  }
}

