import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../../data';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactFormComponent {
  private dataService = inject(DataService);
  toastVisible = signal(false);

  touched = {
    establishment: false,
    firstName: false,
    lastName: false,
    function: false,
    email: false,
    phone: false,
    message: false,
    consent: false
  };

  contactData = {
    establishment: '',
    firstName: '',
    lastName: '',
    function: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  };

  isInvalid(field: keyof typeof this.touched) {
    return this.touched[field] && !this.contactData[field];
  }

  isValid(field: keyof typeof this.touched) {
    return this.touched[field] && !!this.contactData[field];
  }

  isFormValid() {
    return (
      this.contactData.establishment &&
      this.contactData.firstName &&
      this.contactData.lastName &&
      this.contactData.function &&
      this.contactData.email &&
      this.contactData.phone &&
      this.contactData.message &&
      this.contactData.consent
    );
  }

  markAllTouched() {
    Object.keys(this.touched).forEach(k => {
      this.touched[k as keyof typeof this.touched] = true;
    });
  }

  onSubmit() {
    this.markAllTouched();
    if (!this.isFormValid()) return;

    this.dataService.sendContact(this.contactData).subscribe({
      next: () => {
        this.toastVisible.set(true);
        setTimeout(() => this.toastVisible.set(false), 3500);
        this.contactData = {
          establishment: '',
          firstName: '',
          lastName: '',
          function: '',
          email: '',
          phone: '',
          message: '',
          consent: false
        };
        Object.keys(this.touched).forEach(k => {
          this.touched[k as keyof typeof this.touched] = false;
        });
      },
      error: (err) => {
        console.error('Backend error:', err);
        alert('Failed to send message.');
      }
    });
  }
}