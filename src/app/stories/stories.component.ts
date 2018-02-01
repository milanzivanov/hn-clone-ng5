import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HncloneApiService } from '../hnclone-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {

  // aca
  items: number[];

  constructor(private _hackerCloneApiService: HncloneApiService) {
  }

  ngOnInit() {
    this._hackerCloneApiService.fetchStories()
                        .subscribe(items => this.items = items,
                                   error => console.log('Error!!!'));
  }

}
