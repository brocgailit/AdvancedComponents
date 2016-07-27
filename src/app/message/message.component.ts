import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: '[message]',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() header;
  @HostBinding('attr.class') class = 'panel panel-default';

  constructor() { }

  ngOnInit() {
  }

}
