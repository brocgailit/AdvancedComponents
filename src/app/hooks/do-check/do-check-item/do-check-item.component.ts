import { Component, KeyValueDiffers, Input, DoCheck, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'do-check-item',
  templateUrl: 'do-check-item.component.html',
  styleUrls: ['do-check-item.component.css']
})
export class DoCheckItemComponent implements DoCheck, OnInit {

  @Input() comment;
  @Output() onRemove: EventEmitter<any>;
  differ: any;

  constructor(differs: KeyValueDiffers) {
    this.differ = differs.find([]).create(null);
    this.onRemove = new EventEmitter();
  }

  ngDoCheck() {
    let changes = this.differ.diff(this.comment);

    if (changes) {
      changes.forEachAddedItem( r => this.logChange('added', r));
      changes.forEachRemovedItem( r => this.logChange('removed', r));
      changes.forEachChangedItem( r => this.logChange('changed', r));
    }
  }

  ngOnInit() {
  }

  logChange(action, r) {
    switch (action) {
      case 'changed':
        console.log(r.key, action, 'from', r.previousValue, 'to', r.currentValue);
        break;
      case 'added':
        console.log(action, r.key, 'with', r.currentValue);
        break;
      case 'removed':
        console.log(action, r.key, '(was ' + r.previousValue + ')');
        break;
      default:
        console.log('These are not the droids you are looking for');
        break;
    }
  }

  remove() {
    this.onRemove.emit(this.comment);
  }

  clear() {
    delete this.comment.comment;
  }

  like() {
    this.comment.likes += 1;
  }

}
