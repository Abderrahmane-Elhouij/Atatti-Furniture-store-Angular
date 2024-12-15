import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AnimateFromViewportDirective } from '../../animate-from-viewport.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero3',
  imports: [AnimateFromViewportDirective, RouterLink],
  standalone: true,
  templateUrl: './hero3.component.html',
  styleUrl: './hero3.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero3Component {

}
