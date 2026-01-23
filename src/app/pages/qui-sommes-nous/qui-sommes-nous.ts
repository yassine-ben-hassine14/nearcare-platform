import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { FoundersHeroComponent } from './components/founders-hero/founders-hero';
import { ProblemStatementComponent } from './components/problem-statement/problem-statement';
import { SolutionShowcaseComponent } from './components/solution-showcase/solution-showcase';
import { TrustLogosComponent } from './components/trust-logos/trust-logos';
import { CtaFooterComponent } from './components/cta-footer/cta-footer';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-qui-sommes-nous',
  standalone: true,
  imports: [
    NavbarComponent,
    ScrollAnimationDirective,
    FoundersHeroComponent,
    ProblemStatementComponent,
    SolutionShowcaseComponent,
    TrustLogosComponent,
    CtaFooterComponent,
    FooterComponent
  ],
  templateUrl: './qui-sommes-nous.html',
  styleUrl: './qui-sommes-nous.scss'
})
export class QuiSommesNousComponent {}
