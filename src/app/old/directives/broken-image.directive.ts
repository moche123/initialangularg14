import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBrokenImage]'
})
export class BrokenImageDirective {

  constructor( private el: ElementRef ) { } //!el ===> ELEMENTO AL QUE SE LE ESTÁ APLICANDO LA DIRECTIVA


  @HostListener('error')
  loadNoImage(){
    this.el.nativeElement.src = 'assets/no-image.jpg'
  }

}
