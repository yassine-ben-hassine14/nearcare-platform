import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd, Event } from '@angular/router';
import { Inject, PLATFORM_ID } from '@angular/core';

/* top nav w/ active underline + scroll hide effect */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @Input() activeLabel = 'Accueil';
  @Input() hideUnderline = false;

  menuItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Qui sommes-nous ?', path: '/qui-sommes-nous' },
    { label: 'Fonctionnalités', path: '/fonctionnalites' },
    { label: 'Actualités' },
    { label: 'Contact', path: '/contact' }
  ];

  underlineLeft = '0px';
  underlineWidth = '0px';
  isHidden = false;
  isHovered = false;
  isCtaHovered = false;
  private lastScrollTop = 0;

  @ViewChild('navLinks') navLinksContainer?: ElementRef;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.setActiveLabelFromRoute(this.router.url);

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveLabelFromRoute(event.urlAfterRedirects);
        this.updateUnderline();
      }
    });

    window.addEventListener('scroll', () => {
      this.checkScrollPosition();
    });
  }

  ngAfterViewInit() {
    // use setTimeout 0 to wait for next tick so DOM is ready
    setTimeout(() => {
      this.updateUnderline();
    }, 0);
  }

  checkScrollPosition() {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition < 50) {
      this.isHidden = false;
    }
    else if (currentScrollPosition < this.lastScrollTop) {
      this.isHidden = false;
    }
    else if (currentScrollPosition > this.lastScrollTop && !this.isHovered) {
      this.isHidden = true;
    }

    if (currentScrollPosition <= 0) {
      this.lastScrollTop = 0;
    } else {
      this.lastScrollTop = currentScrollPosition;
    }

    this.cdRef.detectChanges();
  }

  onMouseEnter() {
    this.isHovered = true;
    this.isHidden = false;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  onCtaEnter() {
    this.isCtaHovered = true;
  }

  onCtaLeave() {
    this.isCtaHovered = false;
  }

  private updateUnderline() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.hideUnderline) {
      this.underlineWidth = '0px';
      this.underlineLeft = '0px';
      return;
    }

    if (!this.navLinksContainer) return;
    const containerElement = this.navLinksContainer.nativeElement;

    const activeLinkElement = containerElement.querySelector('.nav-link.active');

    if (!activeLinkElement) return;

    const containerRect = containerElement.getBoundingClientRect();
    const linkRect = activeLinkElement.getBoundingClientRect();

    let distanceFromLeft = linkRect.left - containerRect.left;

    if (distanceFromLeft < 0) {
      distanceFromLeft = 0;
    }

    this.underlineLeft = distanceFromLeft + 'px';
    this.underlineWidth = linkRect.width + 'px';

    this.cdRef.detectChanges();
  }

  private setActiveLabelFromRoute(url: string) {
    if (url.includes('joindre-nearcare')) {
      this.activeLabel = '';
    } else if (url.includes('qui-sommes-nous')) {
      this.activeLabel = 'Qui sommes-nous ?';
    } else if (url.includes('fonctionnalites')) {
      this.activeLabel = 'Fonctionnalités';
    } else if (url.includes('contact')) {
      this.activeLabel = 'Contact';
    } else {
      this.activeLabel = 'Accueil';
    }
  }
}
