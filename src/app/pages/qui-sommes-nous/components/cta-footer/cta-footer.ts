import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cta-footer.html',
  styleUrl: './cta-footer.scss'
})
export class CtaFooterComponent {}
