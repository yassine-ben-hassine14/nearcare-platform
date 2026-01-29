import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../../../data';

@Component({
  selector: 'app-recommandation-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recommandation-form.html',
  styleUrl: './recommandation-form.scss'
})
export class RecommandationFormComponent {

  // standard bool, not Signal
  toastVisible = false;

  recommandationForm: FormGroup;

  // using constructor injection, not inject()
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.recommandationForm = this.formBuilder.group({
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
  }

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
        this.toastVisible = true;

        // hide after 3.5s
        setTimeout(() => {
          this.toastVisible = false;
        }, 3500);

        this.recommandationForm.reset();
      },
      error: (err) => {
        console.error('Backend error:', err);
      }
    });
  }
}
