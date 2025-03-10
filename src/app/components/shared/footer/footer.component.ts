import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})
export class FooterComponent {
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faPhone= faPhone;
  faEnvelope= faEnvelope;




}
