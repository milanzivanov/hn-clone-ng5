import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  // first way
  // items: number[];
  // second way
  items: Array<number>;

  constructor() {
    this.items = Array(30);
  }

  ngOnInit() {
  }

}
