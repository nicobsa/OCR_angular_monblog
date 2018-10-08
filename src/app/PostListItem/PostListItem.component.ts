import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-PostListItem',
  templateUrl: './PostListItem.component.html',
  styleUrls: ['./PostListItem.component.scss']
})
export class PostListItemComponent implements OnInit {
	
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;
  
  constructor() { }

  ngOnInit() {
  }
  
  onLoveIt(){
	  this.postLoveIts++;
  }
  
  onDontLoveIt(){
	  this.postLoveIts--;
  }

}
