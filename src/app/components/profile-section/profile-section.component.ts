import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';

@Component({
  selector: 'app-profile-section',
  imports: [MatCard, MatCardHeader, MatCardContent],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.scss'
})
export class ProfileSectionComponent {
  profileImageUrl = 'assets/images/profile.jpeg';
}
