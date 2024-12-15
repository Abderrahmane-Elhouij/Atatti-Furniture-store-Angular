import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AnimateFromViewportDirective } from '../../animate-from-viewport.directive';

@Component({
  selector: 'app-hero2',
    imports: [AnimateFromViewportDirective],
    standalone: true,
  templateUrl: './hero2.component.html',
  styleUrl: './hero2.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero2Component {

}
