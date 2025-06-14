import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalService } from '../services/modal.service';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-popup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-popup.component.html',
  styleUrls: ['./contact-popup.component.scss']
})
export class ContactPopupComponent {
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private http: HttpClient,
    private router: Router 
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      this.isLoading = true;
      this.modalService.close();
      this.router.navigate(['/thank-you-page']);
      this.http.post(`https://jasonhollidaymagic.up.railway.app/send-email`, this.contactForm.value)
        .subscribe({
          next: (response) => {
            this.successMessage = 'E-Mail erfolgreich gesendet!';
            this.errorMessage = '';
            this.contactForm.reset();
          },
          error: (error) => {
            this.errorMessage = 'Fehler beim Senden der E-Mail. Bitte versuche es später erneut.';
            this.successMessage = '';
            console.error('Fehler beim Senden der E-Mail', error);
          },
          complete: () => {
            this.isLoading = false;
          }
        });
    } else {
      this.errorMessage = 'Bitte fülle alle Pflichtfelder aus.';
      this.successMessage = '';
      console.log('Formular ist ungültig');
    }
  }

  closePopup(): void {
    this.modalService.close();
  }
}
