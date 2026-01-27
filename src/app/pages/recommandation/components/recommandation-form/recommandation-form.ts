import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../../../data';


@Component({
  selector: 'app-recommandation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recommandation-form.html',
  styleUrl: './recommandation-form.scss'
})
export class RecommandationFormComponent {
  private formBuilder = inject(FormBuilder);
  private dataService = inject(DataService);
  toastVisible = signal(false);

  recommandationForm = this.formBuilder.group({
    nom: ['', Validators.required],
    prenoms: ['', Validators.required],
    entreprise: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
      ]
    ]
  });

  isInvalid(controlName: string) {
    const control = this.recommandationForm.get(controlName);
    return !!control && control.touched && control.invalid;
  }

  isValid(controlName: string) {
    const control = this.recommandationForm.get(controlName);
    return !!control && control.touched && control.valid;
  }

  onSubmit() {
    if (this.recommandationForm.invalid) {
      this.recommandationForm.markAllAsTouched();
      return;
    }
    this.dataService.sendRecommendation(this.recommandationForm.value).subscribe({
      next: () => {
        this.toastVisible.set(true);
        setTimeout(() => this.toastVisible.set(false), 3500);
        this.recommandationForm.reset();
      },
      error: (err) => {
        console.error('Backend error:', err);
      }
    });
  }
}
