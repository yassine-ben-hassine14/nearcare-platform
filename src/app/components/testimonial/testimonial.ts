import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss'
})
export class TestimonialComponent {
  testimonials = signal<Testimonial[]>([
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
      name: 'Laurent',
      role: 'RH',
      text: "Un outil indispensable pour la gestion des ressources humaines. La simplicité d'utilisation et l'efficacité sont au rendez-vous.",
      avatar: 'avatar-illustration.svg'
    }
  ]);

  currentIndex = signal(0);

  currentTestimonial = computed(() => 
    this.testimonials()[this.currentIndex()]
  );

  nextTestimonial() {
    this.currentIndex.update(index => 
      index === this.testimonials().length - 1 ? 0 : index + 1
    );
  }

  previousTestimonial() {
    this.currentIndex.update(index => 
      index === 0 ? this.testimonials().length - 1 : index - 1
    );
  }

  goToTestimonial(index: number) {
    this.currentIndex.set(index);
  }
}
