import { Component } from '@angular/core';

import { FaqComponent } from "../faq/faq.component";
import { ContactComponent } from "../contact/contact.component";
import { HeroComponent } from "../hero/hero.component";
import { ReferenceComponent } from "../reference/reference.component";
import { EventsComponent } from "../events/events.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { InstructionComponent } from "../instruction/instruction.component";


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FaqComponent, ContactComponent, HeroComponent, ReferenceComponent, EventsComponent, AboutMeComponent, InstructionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
