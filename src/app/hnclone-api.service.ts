import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class HncloneApiService {

  data: number[];
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
  }

  async fetchStories(): Promise<HnInterface[]> {
    const ids = await this.http.get(`${this.baseUrl}/topstories.json`)
                    .map(response => this.data = response as number[]).toPromise();

                    const temp = ids.map( p => {
                      return this.fetchItem(p);
                    });

                    const res = Promise.all(temp);
                    return res;
  }


  fetchItem(id: number): Promise<HnInterface> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`)
    .map((response) => response as HnInterface).toPromise();
  }

  fetchComment(id: number): Promise<HnComments> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`)
    .map((response) => {
      // moze i u jednoj liniji kao iznad
      return response as HnComments;
    }).toPromise();
  }

  fetchComments(ids: number[]): Promise<HnComments[]> {
    const temp = ids.map( p => this.fetchComment(p));
    const res = Promise.all(temp);
    return res;
  }
}

export interface HnInterface {
  by: string;
  descendants: number;
  id: number;
  kids?: (number)[] | null;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface HnComments {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}
