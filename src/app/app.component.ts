import { EducationSectionComponent } from './components/education-section/education-section.component';
import { MatToolbar } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileSectionComponent } from './components/profile-section/profile-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProfileSectionComponent, AboutSectionComponent, ExperienceSectionComponent, EducationSectionComponent, SkillsSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'my-portfolio';
}
