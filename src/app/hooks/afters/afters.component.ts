import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'afters',
  templateUrl: 'afters.component.html',
  styleUrls: ['afters.component.css']
})
export class AftersComponent implements OnInit {

  counter: number;

  constructor() { 
    console.log('After --- [constructor]');
    this.counter = 1;
  }

  ngOnInit() {
    console.log('After - OnInit');
  }

  increment() {
    console.log('After --- [counter]');
    this.counter += 1;
  }

  ngOnDestroy() {
    console.log('After- OnDestroy');
  }

  ngDoCheck() {
    console.log('After - DoCheck');    
   }

   ngOnChanes() {
     console.log('After - OnChanges');     
   }

   ngAfterContentInit() {
     console.log('After - AfterContentInit');     
   }

   ngAfterContentChecked() {
     console.log('After - AfterContentChecked');
   }

   ngAfterViewInit() {
     console.log('After - AfterViewInit');     
   }

   ngAfterViewChecked() {
     console.log('After - AfterViewChecked');     
   }
}