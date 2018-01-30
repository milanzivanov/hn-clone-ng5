import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HncloneApiService {

  data: Object;
  baseUrl: string;

  constructor(private http: HttpClient) {
    // good practice
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
  }

  fetchStories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/topstories.json`)
                    .map(response => this.data = response);
  }

  fetchItem(id: number): Observable<HnInterface> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`)
                    .map((response) => {
                      const res = response as HnInterface;
                      return {
                        title: res.title,
                        descendants: res.descendants,
                        time: res.time,
                        url: res.url,
                        by: res.by,
                        score: res.score,
                        id: res.id,
                        kids: res.kids,
                        type: res.type
                      };
                    }
                    // .map(response => console.log(response)
                    );
  }
}

// interface
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

