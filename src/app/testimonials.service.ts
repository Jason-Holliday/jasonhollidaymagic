import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor() { }


  getTestimonials() {
    return [
      {
        text: 'Jasons Show auf unserer Feier anlässlich des 10 Hochzeitstages war mega interessant, der Trick mit dem WLAN hat uns am besten gefallen. Unsere Gäste waren überrascht und mitgerissen bei seinen Tricks. Vielen Dank nochmal.',
        author: 'Christian und Jasmin B.',
        image: '/Christian und Jasmin.jpg'
      },
      {
        text: 'Sei gewappnet, denn Jason kann die Welt des ein oder anderen auf den Kopf stellen. Nach eurer Begegnung wirst du so einiges in Frage stellen. Jason bietet eine faszinierende und begeisternde Zaubershow, spannend, lustig und kreativ, einfach genial von Anfang bis Ende.',
        author: 'Johnny H.',
        image: '/Johnny.JPG'
      },

      {
        text: 'Ich habe die Zaubertricks von Jason bei einer Firmenveranstaltung gesehen und die waren wirklich unglaublich! Der Abend wurde dadurch unvergesslich! Mein Lieblingstrick war der, bei dem er die Karten gegessen hat :D Zehn von Zehn, sehr empfehlenswert!',
        author: 'Anna H.',
        image: '/Anna.jpg'
      },
      {
        text: 'Eine tolle Zaubershow, die wirklich beeindruckt und Spaß macht! Jasons Auftritt war einfach sensationell, er war sehr sympathisch und hat das Publikum mit seinen Tricks in seinen Bann gezogen. Mir gefiel besonders gut, dass Leute aus dem Publikum in die Show mit einbezogen wurden. Ich freue mich schon auf Jasons nächste Show!',
        author: 'Emma H.',
        image: '/Emma.jpg'
      },
      {
        text: 'Es ist jedes Mal eine Freude, Jason zuzusehen. Mit seiner freundlichen und offenen Art, guten Laune und Fähigkeiten verzaubert er sein Publikum mit Leichtigkeit. Bei seinen kreativen Einfällen bekommt der Zuschauer stets eine neue Show geboten oder er führt absichtlich auf falsche Fährten, um für einen noch größeren Überraschungseffekt zu sorgen. Jeder im Publikum hat Spaß und bekommt Lust auf Mehr, egal ob in der Schule, Arbeit, privat oder auf öffentlichen Veranstaltungen. Langeweile sucht man bei seinen Auftritten auf jeden Fall vergebens.',
        author: 'Jessie P.',
        image: '/Jessie.jpg'
      },
      {
        text: 'Jason seine zauberhafte Vorstellung hat mich verblüfft und in Staunen versetzt. Seine geschickten Hände und seine kreative Präsentation haben die Magie zum Leben erweckt. Seine Zaubershow war nicht nur unterhaltsam, sondern auch beeindruckend. Er hat es geschafft, mich aus dem Alltag und in eine Welt voller Illusionen zu entführen. Mit jeden seiner Tricks hat er es geschafft mich zum Nachdenken zu bringen, ob nicht vielleicht doch echte Magie im Spiel war. Möge deine Leidenschaft für die Zauberei weiterhin brennen, und mögest du noch viele Menschenmit deinen Tricks und Kunststücken verzaubern. Du bist ein wahrer Künstler, und ich freue mich auf weitere magische Augenblicke!',
        author: 'Lea S.',
        image: ''
      },

      {
        text: 'Truly impressive sleight of hand skills. Simply magnificent magic - You WANT to be tricked by Jason Holliday!',
        author: 'Sophie L.',
        image: '/Sophie.jpeg'
      },
      {
        text: 'Jasons Zaubertricks waren wirklich gut! Die Umsetzung war tadellos und der „Wow“-Effekt war da. Jedes Mal auf‘s Neue vom Hocker gerissen! Weiter so!',
        author: 'Ibo O.',
        image: '/Ibo.jpg'
      },


    ]
  }

}
