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
    // this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  fetchStories(storyType: string, page: number): Observable<any> {
    // return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
    return this.http.get(`${this.baseUrl}/topstories.json`)
    // return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
                    .map(response => this.data = response);
  }

  // start user

  fetchUser(userId: string): Observable<any> {
    // return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
    return this.http.get(`${this.baseUrl}/user/${userId}.json`)
    // return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
                    .map((response) => {
                      return response as any;
                    });
  }

// finish



  fetchItem(itemId: number): Observable<HnInterface> {
    return this.http.get(`${this.baseUrl}/item/${itemId}.json`)
                    .map((response) => {
                      // return response as HnInterface;
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

// pwa

// getFeed(feed): Observable<number[]> {
//   const ref = this.db.list<number>(`/v0/${feed}`);
//   return ref.valueChanges();
// }

// getItem(itemId):  Observable<any> {
//   const ref = this.db.object(`/v0/item/${itemId}`);
//   return ref.valueChanges();
// }

// getUser(userId): Observable<any> {
//   const ref = this.db.object(`/v0/user/${userId}`);
//   return ref.valueChanges();
// }
