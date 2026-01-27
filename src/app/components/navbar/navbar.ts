import {
  Component,
  HostListener,
  signal,
  inject,
  PLATFORM_ID,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  OnChanges,
  SimpleChanges,
  OnInit
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent
  implements OnInit, AfterViewInit, OnChanges {

  @Input() activeLabel = 'Accueil';
  @Input() hideUnderline = false;

  menuItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Qui sommes-nous ?', path: '/qui-sommes-nous' },
    { label: 'Fonctionnalités', path: '/fonctionnalites' },
    { label: 'Actualités' },
    { label: 'Contact', path: '/contact' }
  ];

  @ViewChild('navLinks', { static: false }) navLinks?: ElementRef<HTMLDivElement>;
  @ViewChildren('navLink') navLinkItems?: QueryList<ElementRef<HTMLElement>>;

  underlineLeft = signal('0px');
  underlineWidth = signal('0px');

  isHidden = signal(false);
  isHovered = signal(false);
  isCtaHovered = signal(false); // 👈 NEW

  private lastScrollTop = 0;
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.setActiveLabelFromRoute(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.setActiveLabelFromRoute(
          (event as NavigationEnd).urlAfterRedirects
        );
        this.updateUnderline();
      });
  }

  ngAfterViewInit() {
    this.updateUnderline();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeLabel']) {
      this.updateUnderline();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop < 50 || scrollTop < this.lastScrollTop) {
      this.isHidden.set(false);
    } else if (scrollTop > this.lastScrollTop && !this.isHovered()) {
      this.isHidden.set(true);
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  onMouseEnter() {
    this.isHovered.set(true);
    this.isHidden.set(false);
  }

  onMouseLeave() {
    this.isHovered.set(false);
  }

  onCtaEnter() {
    this.isCtaHovered.set(true);
  }

  onCtaLeave() {
    this.isCtaHovered.set(false);
  }

  private updateUnderline() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!this.navLinks || !this.navLinkItems) return;

    if (this.hideUnderline) {
      this.underlineWidth.set('0px');
      this.underlineLeft.set('0px');
      return;
    }

    requestAnimationFrame(() => {
      const links = this.navLinkItems?.toArray() ?? [];
      const activeIndex = Math.max(
        links.findIndex(
          link => link.nativeElement.dataset['label'] === this.activeLabel
        ),
        0
      );

      const activeLink = links[activeIndex];
      if (!activeLink) return;

      const containerRect =
        this.navLinks?.nativeElement.getBoundingClientRect();
      const linkRect = activeLink.nativeElement.getBoundingClientRect();
      if (!containerRect) return;

      const left = linkRect.left - containerRect.left;

      this.underlineLeft.set(`${Math.max(left, 0)}px`);
      this.underlineWidth.set(`${linkRect.width}px`);
    });
  }

  private setActiveLabelFromRoute(url: string) {
    if (url.includes('joindre-nearcare')) {
      this.activeLabel = '';
      return;
    }
    if (url.includes('qui-sommes-nous')) {
      this.activeLabel = 'Qui sommes-nous ?';
      return;
    }
    if (url.includes('fonctionnalites')) {
      this.activeLabel = 'Fonctionnalités';
      return;
    }
    if (url.includes('contact')) {
      this.activeLabel = 'Contact';
      return;
    }
    this.activeLabel = 'Accueil';
  }
}
