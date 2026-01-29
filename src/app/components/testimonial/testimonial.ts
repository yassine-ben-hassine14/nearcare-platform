import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

/* carousel of user reviews */
@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss'
})
export class TestimonialComponent {

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Pauline',
      role: 'Infirmière',
      text: "Fini les déplacements inutiles ! Plus de temps pour soigner: c'est ce qui nous anime vraiment. Et retrouver à l'hôpital ce que l'on utilise sur nos smartphones dans la vie de tous les jours, c'est le début d'un rêve !",
      avatar: 'P.png'
    },
    {
      id: 2,
      name: 'Marie',
      role: 'Directrice des soins',
      text: "Une solution intuitive qui nous fait gagner un temps précieux au quotidien. L'équipe est à l'écoute et la plateforme évolue constamment pour répondre à nos besoins.",
      avatar: '1.jfif'
    },
    {
      id: 3,
      name: 'Sarah',
      role: 'directrice',
      text: "L'organisation des services de soins a été grandement simplifiée. La visibilité sur les plannings et la gestion des ressources est incomparable.",
      avatar: '3.jfif'
    },
    {
      id: 4,
      name: 'William',
      role: 'Responsable qualité et gestion des risques',
      text: "L’appli nous permet de faire émerger facilement les problématiques de terrain et de faire  adhérer les professionnels à  la démarche d’amélioration continue. Tout est sur smartphone en 2 clics ! Enfin un outil fun pour manager la qualité !",
      avatar: 'L.jfif'
    }
  ];

  currentIndex = 0;

  getCurrentTestimonial(): Testimonial {
    return this.testimonials[this.currentIndex];
  }

  nextTestimonial() {
    if (this.currentIndex === this.testimonials.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = this.currentIndex + 1;
    }
  }

  previousTestimonial() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.testimonials.length - 1;
    } else {
      this.currentIndex = this.currentIndex - 1;
    }
  }

  goToTestimonial(index: number) {
    this.currentIndex = index;
  }
}
