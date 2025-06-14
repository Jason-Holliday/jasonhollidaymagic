import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../services/modal.service';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  constructor(private modalService: ModalService) {}
  activeIndex: number | null = null;

  faqItems: FaqItem[] = [
    {
      question: 'Was sind die Kosten für deine Zaubershow?',
      answer: 'Die Kosten einer Zaubershow können variieren, da sie von verschiedenen Faktoren abhängen, wie Entfernung, Dauer der Vorstellung usw.',
      isOpen: false
    },
    {
      question: 'Wie lange dauert ein Auftritt von dir?',
      answer: 'Ein Auftritt dauert meist 10–20 Minuten pro Tisch. Die Gesamtdauer hängt von der Anzahl der Tische und der Veranstaltung ab.',
      isOpen: false
    },
    {
      question: 'Kann ich dich auch buchen, wenn ich weiter entfernt wohne?',
      answer: 'Klar! Die Entfernung spielt keine Rolle.',
      isOpen: false
    },
    {
      question: 'Müssen wir etwas für dich vorbereiten?',
      answer: 'Nein, du musst nichts vorbereiten. Ich bringe alles mit und zaubere in fast jeder Umgebung.',
      isOpen: false
    },
    {
      question: 'Wie verläuft ein typischer Auftritt?',
      answer: 'Ich mische mich unter die Gäste, gehe von Tisch zu Tisch und präsentiere kleine Wunder direkt vor ihren Augen.',
      isOpen: false
    },
    {
      question: 'Was muss ich tun, um dich zu buchen?',
      answer: 'Kontaktiere mich einfach per E-Mail oder Telefon, dann besprechen wir alles Weitere.',
      isOpen: false
    },
    {
      question: 'Was ist der Unterschied zwischen Bühnenmagie und Close-Up?',
      answer: 'Bühnenmagie findet auf einer Bühne statt, während Close-Up direkt vor den Zuschauern und oft in deren Händen passiert.',
      isOpen: false
    },
    {
      question: 'Kannst du deine Zaubershow auch auf Englisch vorführen?',
      answer: 'Ja, ich kann meine Show auch auf Englisch zeigen.',
      isOpen: false
    },
    {
      question: 'Meine Frage wurde nicht beantwortet – was kann ich tun?',
      answer: 'Schreib mir einfach eine Mail an info@jasonhollidaymagic.de oder kontaktiere mich auf Social Media unter @jasonhollidaymagic.',
      isOpen: false
    }   
  ];

toggle(selectedItem: FaqItem) {
  if (selectedItem.isOpen) {
    selectedItem.isOpen = false;
  } else {
    selectedItem.isOpen = true;
  }
}

onKeydown(event: KeyboardEvent, selectedItem: FaqItem) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault(); 
    this.toggle(selectedItem);
  }
}
  openModal() {
    this.modalService.open('Kontaktformular');
  }

}
