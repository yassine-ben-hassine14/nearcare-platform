import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollAnimationDirective],
  templateUrl: './features.html',
  styleUrls: ['./features.scss']
})
export class FeaturesComponent {

  features = [
    {
      id: 1,
      title: 'Les Soignants',
      subtitle: 'Libérez votre potentiel',
      icon: 'QVCT.png',
      gradient: 'linear-gradient(135deg, #F6339A 0%, #FF2056 100%)',
      bgGradient: 'linear-gradient(137deg, rgba(246, 51, 154, 0.10) 0%, rgba(255, 32, 86, 0.10) 100%)',
      benefits: [
        { icon: 'circle-check.svg', text: 'Qualité de vie améliorée' },
        { icon: 'shield.svg', text: 'Retrouvez du sens' },
        { icon: 'trend-up.svg', text: 'Engagement renforcé' }
      ]
    },
    {
      id: 2,
      title: 'Les Patients et Aidants',
      subtitle: 'Une expérience optimale',
      icon: 'PATIENT.png',
      gradient: 'linear-gradient(135deg, #00BBA7 0%, #00B8DB 100%)',
      bgGradient: 'linear-gradient(137deg, rgba(0, 187, 167, 0.10) 0%, rgba(0, 184, 219, 0.10) 100%)',
      benefits: [
        { icon: 'shield.svg', text: 'Satisfaction maximale' },
        { icon: 'heart.svg', text: "Moins d'anxiété" },
        { icon: 'circle-check.svg', text: 'Meilleure qualité de soins' }
      ]
    },
    {
      id: 3,
      title: 'Les Dirigeants et Managers',
      subtitle: 'Pilotez efficacement',
      icon: 'MANAGERS.png',
      gradient: 'linear-gradient(135deg, #2B7FFF 0%, #4F39F6 100%)',
      bgGradient: 'linear-gradient(137deg, rgba(43, 127, 255, 0.10) 0%, rgba(79, 57, 246, 0.10) 100%)',
      benefits: [
        { icon: 'trend-up.svg', text: 'Productivité accrue' },
        { icon: 'database.svg', text: 'Optimisation des ressources' },
        { icon: 'database.svg', text: 'Données exploitables' }
      ]
    }
  ];
}
