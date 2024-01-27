import { Component } from '@angular/core';
import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrl: './social-icons.component.css',
})
export class SocialIconsComponent {
  faRss = faRss;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}
