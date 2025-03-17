import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';

@Component({
  selector: 'app-skills-section',
  imports: [CommonModule, MatCard, MatCardContent, MatCardHeader],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
  skills = [
    { name: 'Angular' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Java' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'RESTful APIs' },
    { name: 'Responsive Web Design' },
    { name: 'Git' }
  ];
}
