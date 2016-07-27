import { Component, OnInit } from '@angular/core';
import { MessageComponent } from '../message';

@Component({
  moduleId: module.id,
  selector: 'app-transclusion',
  templateUrl: 'transclusion.component.html',
  styleUrls: ['transclusion.component.css'],
  directives: [MessageComponent]
})
export class TransclusionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
