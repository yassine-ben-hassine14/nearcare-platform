import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';
import { RecommandationHeroComponent } from './components/recommandation-hero/recommandation-hero';
import { RecommandationFormComponent } from './components/recommandation-form/recommandation-form';

@Component({
  selector: 'app-recommandation-page',
  standalone: true,
  imports: [
    NavbarComponent,
    RecommandationHeroComponent,
    RecommandationFormComponent,
    FooterComponent
  ],
  templateUrl: './recommandation.html',
  styleUrl: './recommandation.scss'
})
export class RecommandationPageComponent {}
