import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AnimateFromViewportDirective } from '../../animate-from-viewport.directive';

@Component({
  selector: 'app-hero3',
  imports: [AnimateFromViewportDirective],
  standalone: true,
  templateUrl: './hero3.component.html',
  styleUrl: './hero3.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero3Component {

}
