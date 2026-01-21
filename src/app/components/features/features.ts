import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class FeaturesComponent {
  features = [
    {
      id: 1,
      title: 'Les Soignants',
      subtitle: 'Libérez votre potentiel',
      icon: 'assets/icons/heart.svg',
      gradient: 'linear-gradient(135deg, #F6339A 0%, #FF2056 100%)',
      bgGradient: 'linear-gradient(137deg, rgba(246, 51, 154, 0.10) 0%, rgba(255, 32, 86, 0.10) 100%)',
      benefits: [
        { icon: 'assets/icons/circle-check.svg', text: 'Qualité de vie améliorée' },
        { icon: 'assets/icons/shield.svg', text: 'Retrouvez du sens' },
        { icon: 'assets/icons/trend-up.svg', text: 'Engagement renforcé' }
      ]
    },
    {
      id: 2,
      title: 'Les Patients et Aidants',
      subtitle: 'Une expérience optimale',
      icon: 'assets/icons/users.svg',
      gradient: 'linear-gradient(135deg, #00BBA7 0%, #00B8DB 100%)',
      bgGradient: 'linear-gradient(137deg, rgba(0, 187, 167, 0.10) 0%, rgba(0, 184, 219, 0.10) 100%)',
      benefits: [
        { icon: 'assets/icons/shield.svg', text: 'Satisfaction maximale' },
        { icon: 'assets/icons/heart.svg', text: "Moins d'anxiété" },
        { icon: 'assets/icons/circle-check.svg', text: 'Meilleure qualité de soins' }
      ]
    },
    {
      id: 3,
      title: 'Les Dirigeants et Managers',
      subtitle: 'Pilotez efficacement',
      icon: 'assets/icons/database.svg',
      gradient: 'linear-gradient(135deg, #2B7FFF 0%, #4F39F6 100%)',
      bgGradient: 'linear-gradient(137deg, rgba(43, 127, 255, 0.10) 0%, rgba(79, 57, 246, 0.10) 100%)',
      benefits: [
        { icon: 'assets/icons/trend-up.svg', text: 'Productivité accrue' },
        { icon: 'assets/icons/database.svg', text: 'Optimisation des ressources' },
        { icon: 'assets/icons/database.svg', text: 'Données exploitables' }
      ]
    }
  ];
}