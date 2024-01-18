import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  
  @Input() dataFromParent = 0;
  
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
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  
  
  
}
