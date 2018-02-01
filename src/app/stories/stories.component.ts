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

  // tslint:disable-next-line:no-inferrable-types
  papitoMsg: string = 'Hola from papito!!!';

  constructor() {
    // question
    this.items = new Array(30);
  }

  ngOnInit() {
  }

}
