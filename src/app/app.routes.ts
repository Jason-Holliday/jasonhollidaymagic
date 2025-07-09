import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { WiderrufsrechtComponent } from './widerrufsrecht/widerrufsrecht.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent, data: { title: 'Startseite' } },
  { path: 'impressum', component: ImpressumComponent, data: { title: 'Impressum' } },
  { path: 'datenschutz', component: DatenschutzComponent, data: { title: 'Datenschutz' } },
  { path: 'widerrufsrecht', component: WiderrufsrechtComponent, data: { title: 'Widerrufsrecht' } },
  { path: 'cookies', component: CookiesComponent, data: { title: 'Cookies' } },
  { path: 'thank-you-page', component: ThankYouPageComponent, data: { title: 'Vielen Dank Seite' } },
  { path: '**', redirectTo: '', data: { title: 'Startseite' } } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
