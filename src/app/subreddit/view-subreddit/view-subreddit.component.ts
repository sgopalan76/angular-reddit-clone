import { Component, OnInit } from '@angular/core';
import { SubredditModel } from '../subreddit-response';
import { SubredditService } from '../subreddit.service';
import { ActivatedRoute} from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-view-subreddit',
  templateUrl: './view-subreddit.component.html',
  styleUrls: ['./view-subreddit.component.css']
})
export class ViewSubredditComponent implements OnInit {

  subreddits: SubredditModel;
  id: number;

  constructor( private route: ActivatedRoute,
    private subredditService: SubredditService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.subredditService.getSubreddit(this.id).subscribe(data => {
    this.subreddits = data;
    }, error => {
      throwError(error);
    })
  }

}
