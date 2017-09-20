import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { FeedService } from './services/feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FeedService]
})
export class AppComponent implements OnInit {
  public itemList= { title: '',
                     description: '',
                     rows: []
                   };
constructor(private router: Router, private feedService: FeedService) { }
  ngOnInit(): void {
    this.feedService.getFeeds().subscribe(data => this.itemList = data);
  }
  onNavigate(urlChanges) {
    this.router.navigate([(urlChanges.title)]);
  }
}
