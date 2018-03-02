import { Component, OnInit, Input } from '@angular/core';
import { HnInterface, HncloneApiService, HnComments } from '../hnclone-api.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  collapse: boolean;

  @Input() isRoot: boolean;
  @Input() ids: number[];

  comments: HnComments[];

  constructor(private _hackerCloneApiService: HncloneApiService) { }

  async ngOnInit() {
    this.collapse = true;

    if (this.isRoot) {
      this.comments = await this._hackerCloneApiService.fetchComments(this.ids);
    }
  }

  async onCollapse() {
    this.collapse = !this.collapse;
    if (this.comments === undefined && this.ids !== undefined) {
      this.comments = await this._hackerCloneApiService.fetchComments(this.ids);

      // db 123
      console.log('comment-list-component');
      console.log(this.comments);
      console.log('comment-list-compnent-ids');
      console.log(this.ids);
    }
  }



}
