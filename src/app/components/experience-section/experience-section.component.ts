import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-experience-section',
  imports: [CommonModule, MatCard, MatCardHeader, MatCardContent, MatDivider],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
})
export class ExperienceSectionComponent {
  experiences = [
    {
      position: 'Full Stack Developer',
      company: 'Cisco',
      years: 'Feb 2021 - Present (4 yrs 2 mos)',
      location: 'San Jose, CA',
      description: `Developed responsive Angular web applications, enhancing user engagement by 25% and reducing manual work by 75%.
        Created reusable components, reducing development time by 15% and improving code reusability.
        Integrated front-end components with backend APIs, ensuring seamless data flow and real-time updates.
        Collaborated with cross-functional teams to define RESTful API specifications, reducing integration errors by 30%.
        Boosted application speed by 40% through performance optimization and refactoring.
        Maintained a 95% user satisfaction rate by resolving issues promptly.`,
      skills: 'Angular, Java, hTML, CSS, JavaScript, RESTful APIs',
      companyIcon: 'assets/images/cisco_logo.jpeg',
    },
    {
      position: 'Full Stack Developer',
      company: 'Comcast',
      years: 'Nov 2019 - Feb 2021 (1 yr 4 mos)',
      location: 'Philadelphia, PA',
      description: `Developed a small module business web application using Angular that enabled customer service representatives to seamlessly place orders for Comcast services.
        Enhanced user engagement by creating an intuitive UI for service selection, customization, and order submission.
        Enabled real-time updates of the order summary as users customized their selections, contributing to a 30% increase in successful order submissions due to improved visibility into customization choices.`,
      skills: 'Angular, Java, hTML, CSS, JavaScript, RESTful APIs',
      companyIcon: 'assets/images/comcast_logo.jpeg',
    },
    {
      position: 'Full Stack Developer',
      company: 'Cisco',
      years: 'Oct 2018 - Oct 2019 (1 yr 1 mos)',
      location: 'San Jose, CA',
      description: `Enhanced user engagement by 30% through the design of a professional UI web application.
        Reduced UI load times by 25%, enhancing user experience.
        Implemented form validation and confirmation messages for a smooth request creation.`,
      skills: 'Angular, Java, hTML, CSS, JavaScript, RESTful APIs',
      companyIcon: 'assets/images/cisco_logo.jpeg',
    },
  ];
}
