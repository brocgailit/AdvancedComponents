import { Component, OnInit } from '@angular/core';
import { TabsetComponent } from './tabset';
import { TabComponent } from './tab';

@Component({
  moduleId: module.id,
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.css'],
  directives: [TabsetComponent, TabComponent]
})
export class TabsComponent implements OnInit {

  tabs: any;

  constructor() {
    this.tabs = [
      { title: 'About', content: 'This is the About tab', active: true },
      { title: 'Blog', content: 'This is our blog', active: false },
      { title: 'Contact us', content: 'Contact us here', active: false },
    ];
  }

  ngOnInit() {
  }

}
