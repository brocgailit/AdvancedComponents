import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tab',
  templateUrl: 'tab.component.html',
  styleUrls: ['tab.component.css']
})
export class TabComponent implements OnInit {

  @HostBinding('attr.class') class: string = 'tab-content';
  @Input() title;
  active: boolean = false;
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
