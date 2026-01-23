import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { ContactHeroComponent } from './components/contact-hero/contact-hero';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NavbarComponent,
    ScrollAnimationDirective,
    ContactHeroComponent,
    ContactFormComponent,
    FooterComponent
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactPageComponent {}
