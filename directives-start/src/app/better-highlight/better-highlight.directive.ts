import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'purple';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'grey';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white')
  }

  @HostListener('mouseenter') mousesmth(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white')
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mousemove(eventData:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black')
    this.backgroundColor = this.defaultColor
  }
}
