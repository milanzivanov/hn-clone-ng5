import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class HncloneApiService {
  user: any;

  data: HnInterface[];
  baseUrl: string;

  constructor(private http: HttpClient) {
    //
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
    // this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }


  fetchTopStories(): Observable<HnInterface[]> {
    // return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
    const ids = this.http
      .get(`${this.baseUrl}/topstories.json`)
      .map(response => {
        const temp = response as number[];
        const data = temp.map(r => this.fetchItem(r));
        const unwind = Observable.forkJoin(data);
        return unwind;
      })
      .flatMap(p => p);

      return ids;
  }

  // async fetchTopStories2(): Promise<HnInterface[]> {
  //   const ids = await this.http.get<number[]>(`${this.baseUrl}/topstories.json`);
  //   const promises = ids.map(r => this.fetchItem(r));
  //   return Promise.all(promises);
  // }


  // start user
  fetchUser(userId: string): Observable<any> {
    // interfce to make
    return this.http.get(`${this.baseUrl}/user/${userId}.json`)
    .map((response) => {
      console.log(this.user);
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
