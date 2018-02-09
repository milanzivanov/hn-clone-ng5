import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HncloneApiService, HnInterface } from '../hnclone-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {

  // aca
  items: HnInterface[];

  constructor(private _hackerCloneApiService: HncloneApiService) {
  }

  async ngOnInit() {
    const temp = await this._hackerCloneApiService.fetchStories();

    this.items = temp.slice(0, 5);
    // db123
    // console.log(this.items);
  }

}
