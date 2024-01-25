import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  
  @Input() dataFromParent = 0;
  @Output() dataToParent = new EventEmitter<number>();

  @ViewChild('title') titleRef!: ElementRef;
  
  constructor(){
    console.log('CONSTRUCTOR, sirve para inyección de dependencias');
  }
  
  ngOnInit(): void {
    console.log('ngOnInit, sirve para inicializaciones');
    // console.log(`Referencia al título: ${this.titleRef}`);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges, detección de cambios de inputs');
    console.log(changes)
    // console.log(`Referencia al título: ${this.titleRef}`);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit, modificaciones o acceso al DOM, por que se ejecuta una vez el contenido haya sido renderizado');
    this.titleRef.nativeElement.innerHTML = 'TEXT CHANGED';
  }
  
  
  sendToParent(){
    let randomNumber = Math.random();
    this.dataToParent.emit( randomNumber );
  }
  
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  
}
