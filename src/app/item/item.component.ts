import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  // stories(parent) -- @Input --> item(child)
  @Input() itemID: number;

  @Input() childMsg: string;
  constructor() { }

  ngOnInit() {
  }

}
