import { Component, OnInit, Input } from '@angular/core';
import { HncloneApiService } from '../hnclone-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  // stories(parent) -- @Input --> item(child)
  @Input() itemID: number;
  item;


  constructor(private _hackerCloneApiService: HncloneApiService) { }

  ngOnInit() {
    this._hackerCloneApiService.fetchItem(this.itemID).subscribe(data => {
      this.item = data;
      console.log(data);
    }, error => console.log('Could not load item' + this.itemID));


  }

}
