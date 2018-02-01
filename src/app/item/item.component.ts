import { Component, OnInit, Input } from '@angular/core';
import { HncloneApiService, HnInterface } from '../hnclone-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  // stories(parent) -- @Input --> item(child)
  @Input() itemID: number;
  // ACA
  item: HnInterface;

  // time
  // today = Date.now();
  // fixedTimezone = '2015-06-15T09:03:01+0900';


  constructor(private _hackerCloneApiService: HncloneApiService) { }

  ngOnInit() {
    this._hackerCloneApiService.fetchItem(this.itemID).subscribe(data => {
      this.item = data;
      console.log(data);
    }, error => console.log('Could not load item' + this.itemID));

  }

  timeFormated() {
    return (new Date(this.item.time)).toDateString();
  }

}
