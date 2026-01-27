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
export class FonctionnalitesPageComponent {}
