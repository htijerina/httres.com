import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

}
