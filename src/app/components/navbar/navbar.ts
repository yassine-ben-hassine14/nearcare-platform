import { Component, HostListener, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  menuItems = [
    { label: 'Accueil', active: true },
    { label: 'Qui sommes-nous ?', active: false },
    { label: 'Fonctionnalités', active: false },
    { label: 'Actualités', active: false },
    { label: 'Contact', active: false }
  ];

  isHidden = signal(false);
  isHovered = signal(false);
  
  private lastScrollTop = 0;
  private platformId = inject(PLATFORM_ID);

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Show if at top or scrolling up
    if (scrollTop < 50 || scrollTop < this.lastScrollTop) {
      this.isHidden.set(false);
    } else if (scrollTop > this.lastScrollTop && !this.isHovered()) {
      // Hide if scrolling down and not hovered
      this.isHidden.set(true);
    }
    
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  onMouseEnter() {
    this.isHovered.set(true);
    this.isHidden.set(false); // Show immediately on hover
  }

  onMouseLeave() {
    this.isHovered.set(false);
  }
}