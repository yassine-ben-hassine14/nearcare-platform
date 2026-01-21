import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}