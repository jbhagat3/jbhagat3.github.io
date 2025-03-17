import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-education-section',
  imports: [CommonModule, MatCard, MatCardHeader, MatCardContent, MatDivider],
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.scss'
})
export class EducationSectionComponent {
  education = [
    {
      institution: 'California State University, Los Angeles',
      degree: "Master's degree, Computer Science",
      years: '2016 - 2018',
      institutionIcon: 'assets/images/csula_logo.jpeg'
    },
    {
      institution: 'Nagpur University',
      degree: "Bachelor's degree, Computer Technology/Computer Systems Technology",
      years: '2011 - 2015',
      institutionIcon: 'assets/images/nagpur_univ_logo.jpeg'
    }
  ];

}
