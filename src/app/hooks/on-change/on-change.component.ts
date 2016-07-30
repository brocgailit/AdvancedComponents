import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'on-change',
  templateUrl: 'on-change.component.html',
  styleUrls: ['on-change.component.css']
})
export class OnChangeComponent implements OnInit, OnChanges {

  @Input('name') name: string;
  @Input('comment') comment: string;

  constructor() { }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    console.log('changes', changes);
  }

  ngOnInit() {
  }

}
