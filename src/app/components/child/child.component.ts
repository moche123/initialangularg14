import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  
  @Input() dataFromParent = 0;
  @Output() dataToParent = new EventEmitter<number>();
  
  constructor(){
    console.log('CONSTRUCTOR')
  }
  
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
    console.log(changes)
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  
  
  sendToParent(){
    let randomNumber = Math.random();
    this.dataToParent.emit( randomNumber );
  }
  
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  
}
