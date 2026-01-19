import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { HeroComponent } from '../../components/hero/hero';
import { PartnersComponent } from '../../components/partners/partners';
import { AboutCeoComponent } from '../../components/about-ceo/about-ceo';
import { SolutionCardsComponent } from '../../components/solution-cards/solution-cards';
import { CtaSectionComponent } from '../../components/cta-section/cta-section';
import { TestimonialComponent } from '../../components/testimonial/testimonial';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    PartnersComponent,
    AboutCeoComponent,
    SolutionCardsComponent,
    CtaSectionComponent,
    TestimonialComponent,
    FooterComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}