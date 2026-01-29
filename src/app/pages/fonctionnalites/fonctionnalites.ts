import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-fonctionnalites',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, ScrollAnimationDirective],
  templateUrl: './fonctionnalites.html',
  styleUrl: './fonctionnalites.scss'
})
export class FonctionnalitesPageComponent {
  // moved hardcoded cards to data list for cleaner code
  featuresList = [
    {
      title: 'Messagerie et alertes (soignants)',
      iconPath: 'M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      items: [
        'Echanges sécurisés avec NLP',
        'Photos et documents',
        'Priorisation des messages',
        'Alertes ciblées par thème'
      ]
    },
    {
      title: 'Sonnette digitale (patients/soignants)',
      iconPath: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
      items: [
        'Qualification des demandes',
        'Dispaching intelligent',
        'Statut temps réel des demandes',
        'Feedback temps réel du patient'
      ]
    },
    {
      title: 'Dashboard (soignant)',
      iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      items: [
        'Organisateur de tâches',
        'Patients et parcours en mobilité',
        'Procédures nouveaux arrivants',
        'Feedback bien être/évenements indésirables'
      ]
    },
    {
      title: 'Données temps réels (manager)',
      iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      items: [
        'Activités afférentes aux soins',
        'Satisfaction temps réel du patient',
        'Evènements indésirables',
        'Veille sociale'
      ]
    }
  ];
}
