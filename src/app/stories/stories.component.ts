import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HncloneApiService, HnInterface } from '../hnclone-api.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {

  // question
  // items: number[] = [];
  items: HnInterface[];

  // router
  typeSub: any;
  pageSub: any;
  storiesType;
  pageNum: number;
  listStart: number;

  // user
  // tslint:disable-next-line:no-inferrable-types
  // user: string = 'il';
  user: string;
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

    // tttt
    this._hackerCloneApiService.fetchTopStories()
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
