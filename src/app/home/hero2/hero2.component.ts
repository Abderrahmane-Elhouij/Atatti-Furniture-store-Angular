import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AnimateFromViewportDirective } from '../../animate-from-viewport.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero2',
    imports: [AnimateFromViewportDirective, RouterLink],
    standalone: true,
  templateUrl: './hero2.component.html',
  styleUrl: './hero2.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero2Component {

}
