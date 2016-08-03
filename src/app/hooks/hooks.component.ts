import { Component, OnInit } from '@angular/core';
import { ToggleInitComponent } from './toggle-init';
import { OnChangeComponent } from './on-change';
import { DoCheckComponent } from './do-check';
import { AftersComponent } from './afters';

@Component({
  moduleId: module.id,
  selector: 'app-hooks',
  templateUrl: 'hooks.component.html',
  styleUrls: ['hooks.component.css'],
  directives: [ ToggleInitComponent, OnChangeComponent, DoCheckComponent, AftersComponent ]
})
export class HooksComponent implements OnInit {
  display: boolean;
  displayAfters: boolean;
  name: string = '';
  comment: string;

  constructor() {
    this.display = true;
    this.displayAfters = true;
   }

   toggle() {
     this.display = !this.display;
   }

   toggleAfters() {
     this.displayAfters = !this.displayAfters;
   }

   setValues(name, comment) {
     this.name = name.value;
     this.comment = comment.value;
   }

  ngOnInit() { }

}
