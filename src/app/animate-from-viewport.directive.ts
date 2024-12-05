import { Directive, ElementRef, Renderer2, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAnimateFromViewport]'
})
export class AnimateFromViewportDirective implements OnInit, OnDestroy {
  @Input() animationClass: string = '';
  @Input() duration = 1; // Duration in seconds

  private observer: IntersectionObserver = null!;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    
    this.renderer.setStyle(this.el.nativeElement, '--animation-duration', `${this.duration}s`); 
    this.renderer.setStyle(this.el.nativeElement, 'transition-delay', '0s'); 
    
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
         
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
        }
      });
    }, {
      threshold: 0.5, 
    });

    // Start observing the element
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
