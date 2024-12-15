import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AnimateFromViewportDirective } from '../../animate-from-viewport.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero1',
  imports: [AnimateFromViewportDirective, RouterLink],
  standalone: true,
  templateUrl: './hero1.component.html',
  styleUrl: './hero1.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero1Component {

}
