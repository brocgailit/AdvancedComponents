import { Component, OnInit } from '@angular/core';
import { Popup } from '../popup.directive';

@Component({
  moduleId: module.id,
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.css'],
  directives: [Popup]
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
