import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedService {
  constructor(private http: Http) { }
  getFeeds() {
    return this.http.get(`https://dl.dropboxusercontent.com/s/nlpz9o8o5e1t602/Data.json?dl=0`)
      .map((res: Response) => res.json());
  }

}
