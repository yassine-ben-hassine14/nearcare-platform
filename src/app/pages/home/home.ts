import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { HeroComponent } from '../../components/hero/hero';
import { PartnersComponent } from '../../components/partners/partners';
import { AboutComponent } from '../../components/about/about';
import { CeoQuoteComponent } from '../../components/ceo-quote/ceo-quote';
import { FeaturesComponent } from '../../components/features/features';
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
    AboutComponent,
    CeoQuoteComponent,
    FeaturesComponent,
    CtaSectionComponent,
    TestimonialComponent,
    FooterComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}