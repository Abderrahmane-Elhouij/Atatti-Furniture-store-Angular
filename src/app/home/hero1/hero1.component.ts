import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AnimateFromViewportDirective } from '../../animate-from-viewport.directive';

@Component({
  selector: 'app-hero1',
  imports: [AnimateFromViewportDirective],
  standalone: true,
  templateUrl: './hero1.component.html',
  styleUrl: './hero1.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero1Component {

}
