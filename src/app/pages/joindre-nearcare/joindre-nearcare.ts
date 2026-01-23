import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { JoinHeaderComponent } from './components/join-header/join-header';
import { JoinSelectionComponent } from './components/join-selection/join-selection';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-joindre-nearcare',
  standalone: true,
  imports: [NavbarComponent, JoinHeaderComponent, JoinSelectionComponent, FooterComponent],
  templateUrl: './joindre-nearcare.html',
  styleUrl: './joindre-nearcare.scss'
})
export class JoindreNearcarePageComponent {}
