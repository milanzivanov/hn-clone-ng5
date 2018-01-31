import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HncloneApiService } from '../hnclone-api.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {

  // question
  // items: number[] = [];
  items;

  // router
  typeSub: any;
  pageSub: any;
  storiesType;
  pageNum: number;
  listStart: number;

  // user
  user;
  // userId: string;

  constructor(private _hackerCloneApiService: HncloneApiService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this._hackerCloneApiService.fetchStories()
    //                     .subscribe(items => this.items = items,
    //                                error => console.log('Error!!!'));

    // routing question !!!
    this.typeSub = this.route.data
                           .subscribe(data => this.storiesType = (data as any).storiesType);

  this.pageSub = this.route.params.subscribe(params => {
    this.pageNum = +params['page'] ? +params['page'] : 1;

    this._hackerCloneApiService.fetchStories(this.storiesType, this.pageNum)
                             .subscribe(
                               items => this.items = items,
                               error => console.log('Error fetching' + this.storiesType + 'stories'),
                               () => {
                                 this.listStart = ((this.pageNum - 1) * 30) + 1;
                                window.scrollTo(0, 0);
                              });
                          });


      // user
      this._hackerCloneApiService.fetchUser(this.user).subscribe(data => {
        this.user = data;
        console.log(data);
      }, error => console.log('Could not load item' + this.user));

  }

}
