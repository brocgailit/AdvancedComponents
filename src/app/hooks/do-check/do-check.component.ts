import { Component, DoCheck, IterableDiffers, OnInit } from '@angular/core';
import { DoCheckItemComponent } from './do-check-item';

@Component({
  moduleId: module.id,
  selector: 'do-check',
  templateUrl: 'do-check.component.html',
  styleUrls: ['do-check.component.css'],
  directives: [ DoCheckItemComponent ]
})
export class DoCheckComponent implements DoCheck, OnInit {
  comments: any[];
  iterable: boolean;
  authors: any[];
  texts: string[];
  differ: any;

  constructor(differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
    this.comments = [];

    this.authors = [
      {name: 'Elliot', avatar: 'm_01'},
      {name: 'Helen', avatar: 'f_01'},
      {name: 'Jenny', avatar: 'f_02'},
      {name: 'Joe', avatar: 'm_02'},
      {name: 'Justin', avatar: 'm_03'},
      {name: 'Matt', avatar: 'm_04'},
    ];

    this.texts = [
      `Ours is a life of constant reruns.  We're always circling back to where we started, 
      then starting all over again.  Even if we don't run extra laps that day, we surely
      will come back for more of the same another day soon.`,
      'Really cool!',
      'Thanks!'
    ];

    this.addComment();
  }

  ngDoCheck() {
    let changes = this.differ.diff(this.comments);

    if (changes) {
      changes.forEachAddedItem(r => console.log('Added', r.item));
      changes.forEachRemovedItem(r => console.log('Removed', r.item));
    }
  }

  ngOnInit() {
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

  getRandomItem(array: string[]): string {
    let pos: number = this.getRandomInt(array.length - 1);
    return array[pos];
  }

  addComment() {
    this.comments.push({
      author: this.getRandomItem(this.authors),
      comment: this.getRandomItem(this.texts),
      likes: this.getRandomInt(20)
    });
  }

  removeComment(comment) {
    let pos = this.comments.indexOf(comment);
    this.comments.splice(pos, 1);
  }

}
