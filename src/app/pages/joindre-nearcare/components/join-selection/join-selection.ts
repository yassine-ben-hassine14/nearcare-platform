import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-join-selection',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './join-selection.html',
  styleUrl: './join-selection.scss'
})
export class JoinSelectionComponent { }
