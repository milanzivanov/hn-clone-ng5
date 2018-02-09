import { Component, OnInit, Input } from '@angular/core';
import { HnInterface, HncloneApiService, HnComments } from '../hnclone-api.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  collapse: boolean;

  @Input() item: number;
  @Input() items: number[];
  @Input() isRoot: boolean;
  comments: HnComments[];

  constructor(private _hackerCloneApiService: HncloneApiService) { }

  ngOnInit() {
    this.collapse = true;
  }

  async onCollapse() {
    this.collapse = !this.collapse;
    if (this.comments === undefined && this.items !== undefined) {
      this.comments = await this._hackerCloneApiService.fetchComments(this.items);

      // db 123
      console.log('comment-list-component');
      console.log(this.comments);
      console.log(this.items);
    }
  }



}
