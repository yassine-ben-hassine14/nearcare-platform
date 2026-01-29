import { Component } from '@angular/core';
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

  constructor(private dataService: DataService) { }

  toastVisible = false;
  showSuccess = false;

  touched = {
    establishment: false,
    firstName: false,
    lastName: false,
    'function': false, // quoted bc 'function' is a reserved word
    email: false,
    phone: false,
    message: false,
    consent: false
  };

  contactData = {
    establishment: '',
    firstName: '',
    lastName: '',
    'function': '',
    email: '',
    phone: '',
    message: '',
    consent: false
  };

  isInvalid(field: keyof typeof this.touched): boolean {
    const value = this.contactData[field];

    // don't show error if field hasn't been clicked yet
    if (!this.touched[field]) {
      return false;
    }

    if (!value && field !== 'consent') {
      return true;
    }
    if (field === 'consent' && value === false) {
      return true;
    }

    if (field === 'email' && value) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !emailPattern.test(value as string);
    }

    // check format (at least 10 digits/spaces/+)
    if (field === 'phone' && value) {
      const phonePattern = /^[0-9+ ]{10,}$/;
      return !phonePattern.test(value as string);
    }

    return false;
  }

  isValid(field: keyof typeof this.touched): boolean {
    return this.touched[field] && !this.isInvalid(field);
  }

  isFormValid(): boolean {
    // check each field 1 by 1 for clarity
    if (this.contactData.establishment === '') return false;
    if (this.contactData.firstName === '') return false;
    if (this.contactData.lastName === '') return false;
    if (this.contactData['function'] === '') return false;
    if (this.contactData.consent === false) return false;

    if (this.isInvalid('email') || this.contactData.email === '') return false;
    if (this.isInvalid('phone') || this.contactData.phone === '') return false;
    if (this.isInvalid('message') || this.contactData.message === '') return false;

    return true;
  }

  markAllTouched() {
    Object.keys(this.touched).forEach(k => {
      this.touched[k as keyof typeof this.touched] = true;
    });
  }

  onSubmit() {
    this.markAllTouched();

    if (this.isFormValid() === false) {
      return;
    }

    this.dataService.sendContact(this.contactData).subscribe({
      next: () => {
        this.toastVisible = true;
        this.showSuccess = true;

        // hide after a few secs
        setTimeout(() => {
          this.toastVisible = false;
          this.showSuccess = false;
        }, 5000);

        this.resetForm();
      },
      error: (err) => {
        console.error('Backend error:', err);
        alert('Failed to send message.');
      }
    });
  }

  resetForm() {
    this.contactData = {
      establishment: '',
      firstName: '',
      lastName: '',
      'function': '',
      email: '',
      phone: '',
      message: '',
      consent: false
    };

    this.touched = {
      establishment: false,
      firstName: false,
      lastName: false,
      'function': false,
      email: false,
      phone: false,
      message: false,
      consent: false
    };
  }
}
