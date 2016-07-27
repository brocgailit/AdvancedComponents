import { AfterContentInit, Component, OnInit, Query, QueryList } from '@angular/core';
import { TabComponent } from '../tab';

@Component({
  moduleId: module.id,
  selector: 'tabset',
  templateUrl: 'tabset.component.html',
  styleUrls: ['tabset.component.css']
})
export class TabsetComponent implements AfterContentInit, OnInit {

  tabs: QueryList<TabComponent>;

  constructor(@Query(TabComponent) tabs: QueryList<TabComponent>) {
    this.tabs = tabs;
  }

  ngAfterContentInit() {

    setTimeout(_ => {
      this.tabs.toArray()[0].active = true;
    });
  }

  ngOnInit() {

  }

  setActive(tab: TabComponent) {
    this.tabs.map( t => t.active = false);
    tab.active = true;
  }

}
