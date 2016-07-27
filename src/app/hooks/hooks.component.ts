import { Component, OnInit } from '@angular/core';
import { ToggleInitComponent } from './toggle-init';
import { OnChangeComponent } from './on-change';
import { DoCheckComponent } from './do-check';

@Component({
  moduleId: module.id,
  selector: 'app-hooks',
  templateUrl: 'hooks.component.html',
  styleUrls: ['hooks.component.css'],
  directives: [ ToggleInitComponent, OnChangeComponent, DoCheckComponent ]
})
export class HooksComponent implements OnInit {
  display: boolean;
  name: string = '';
  comment: string;

  constructor() {
    this.display = true;
   }

   toggle() {
     this.display = !this.display;
   }

   setValues(name, comment) {
     this.name = name.value;
     this.comment = comment.value;
   }

  ngOnInit() { }

}
