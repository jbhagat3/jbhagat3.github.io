import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';

@Component({
  selector: 'app-about-section',
  imports: [CommonModule, MatCard, MatCardHeader, MatCardContent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
