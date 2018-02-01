import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HncloneApiService } from '../hnclone-api.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

sub: any;
item;

  constructor(private _hackerCloneApiService: HncloneApiService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const itemID = +params['id'];

      // this._hackerCloneApiService.fetchComments(itemID).subscribe(data => {
      //   this.item = data;
      // }, error => console.log('Could not load item' + itemID));
    });
  }
}


// tslint:disable-next-line:max-line-length
// @Component({  selector: 'app-item-comments',  templateUrl: './item-comments.component.html',  styleUrls: ['./item-comments.component.scss']})export class ItemCommentsComponent implements OnInit {  sub: any;  item;  constructor(    private _hackerNewsAPIService: HackerNewsAPIService,    private route: ActivatedRoute  ) {}  ngOnInit() {        this.sub = this.route.params.subscribe(params => {      let itemID = +params['id'];      this._hackerNewsAPIService.fetchComments(itemID).subscribe(data => {        this.item = data;      }, error => console.log('Could not load item' + itemID));    });  }}
