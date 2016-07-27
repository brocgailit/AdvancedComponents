import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'on-init',
  templateUrl: 'toggle-init.component.html',
  styleUrls: ['toggle-init.component.css']
})
export class ToggleInitComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('On Init');
  }

  ngOnDestroy() {
    console.log('On destroy');
  }

}
