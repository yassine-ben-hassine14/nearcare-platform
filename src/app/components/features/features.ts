import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  text: string;
  color: string;
}

interface FeatureCard {
  image: string;
  title: string;
  subtitle: string;
  features: Feature[];
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class FeaturesComponent {
  cards: FeatureCard[] = [
    {
      image: 'assets/images/soignants.jpg',
      title: 'Les Soignants',
      subtitle: 'Libérez votre potentiel',
      features: [
        { icon: 'assets/icons/heart.svg', text: 'Qualité de vie améliorée', color: '#FF3B82' },
        { icon: 'assets/icons/circle-check.svg', text: 'Retrouvez du sens', color: '#FF3B82' },
        { icon: 'assets/icons/trend-up.svg', text: 'Engagement renforcé', color: '#FF3B82' }
      ]
    },
    {
      image: 'assets/images/patients.jpg',
      title: 'Les Patients et Aidants',
      subtitle: 'Une expérience optimale',
      features: [
        { icon: 'assets/icons/circle-check.svg', text: 'Satisfaction maximale', color: '#00BDA5' },
        { icon: 'assets/icons/shield.svg', text: 'Moins d\'anxiété', color: '#00BDA5' },
        { icon: 'assets/icons/heart.svg', text: 'Meilleure qualité de soins', color: '#00BDA5' }
      ]
    },
    {
      image: 'assets/images/managers.jpg',
      title: 'Les Dirigeants et Managers',
      subtitle: 'Pilotez efficacement',
      features: [
        { icon: 'assets/icons/trend-up.svg', text: 'Productivité accrue', color: '#5B7FFF' },
        { icon: 'assets/icons/users.svg', text: 'Optimisation des ressources', color: '#5B7FFF' },
        { icon: 'assets/icons/database.svg', text: 'Données exploitables', color: '#5B7FFF' }
      ]
    }
  ];
}