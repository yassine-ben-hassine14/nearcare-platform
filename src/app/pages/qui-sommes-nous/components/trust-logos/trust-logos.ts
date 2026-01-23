import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trust-logos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trust-logos.html',
  styleUrl: './trust-logos.scss'
})
export class TrustLogosComponent {
  logos = [
    { name: 'ACTEURS DE LA FRENCH CARE', src: 'Acteurs.png' },
    { name: 'XOALITION NEXT', src: 'next.png' },
    { name: 'HAPPY PATIENT', src: 'Happy.png' },
    { name: 'BPIFRANCE', src: 'bpifrance.png' },
    { name: 'ME DI CEN', src: 'Medicen.png' },
    { name: 'REGION', src: 'centre.png' },
    { name: 'AESIO MUTUELLE', src: 'ASEIO.png' },
    { name: 'NEARCARE PLATFORM', src: 'parisco.png' }
  ];
}
