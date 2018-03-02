import { Component, OnInit, Input } from '@angular/core';
import { HncloneApiService, HnInterface, HnComments } from '../hnclone-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  // stories(parent) -- @Input --> item(child)
  @Input() story: HnInterface;
  comments: HnComments[];
  constructor(private _hackerCloneApiService: HncloneApiService) { }

  ngOnInit() {
  }

}
