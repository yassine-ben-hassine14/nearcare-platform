import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.html',
  styleUrl: './partners.scss'
})
export class PartnersComponent {
  partners = [
    { name: 'Acteurs', logo: 'Acteurs.png' },
    { name: 'ASEIO', logo: 'ASEIO.png' },
    { name: 'bpifrance', logo: 'bpifrance.png' },
    { name: 'centre', logo: 'centre.png' },
    { name: 'Happy', logo: 'Happy.png' },
    { name: 'Medicen', logo: 'Medicen.png' },
    { name: 'next', logo: 'next.png' },
    { name: 'parisco', logo: 'parisco.png' }
  ];
}