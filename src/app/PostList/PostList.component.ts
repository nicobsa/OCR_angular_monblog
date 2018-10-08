import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-PostList',
  templateUrl: './PostList.component.html',
  styleUrls: ['./PostList.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts; 
  
  constructor() { }

  ngOnInit() {
  }

}