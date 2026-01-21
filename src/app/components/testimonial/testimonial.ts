import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss'
})
export class TestimonialComponent {
  mainTestimonial = {
    text: "Fini les déplacements inutiles ! Plus de temps pour soigner: c'est ce qui nous anime vraiment. Et retrouver à l'hôpital ce que l'on utilise sur nos smartphones dans la vie de tous les jours, c'est le début d'un rêve !",
    name: 'Pauline',
    role: 'Infirmière',
    image: 'assets/images/testimonial-pauline.jpg'
  };

  users = [
    { name: 'Pauline', role: 'Infirmière', image: 'assets/images/user-pauline.jpg' },
    { name: 'Marie', role: 'Directrice des soins', image: 'assets/images/user-marie.jpg' },
    { name: 'Sarah', role: 'directrice', image: 'assets/images/user-sarah.jpg' },
    { name: 'Laurent', role: 'RH', image: 'assets/images/user-laurent.jpg' }
  ];

  stars = [1, 2, 3, 4, 5];
}