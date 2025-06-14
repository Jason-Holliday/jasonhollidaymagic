import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }


  onSubmit(): void {
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      this.isLoading = true;
      this.http.post(`https://jasonhollidaymagic.up.railway.app/send-email`, this.contactForm.value)
        .subscribe({
          next: (response) => {
            this.successMessage = 'E-Mail erfolgreich gesendet!';
            this.errorMessage = '';
            this.contactForm.reset();
            this.router.navigate(['/thank-you-page']);;
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
}
