import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  posts=[
	{
	  title: 'Premier article',
	  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra at turpis sed molestie. Morbi elementum placerat euismod. Fusce ligula urna, feugiat et magna sed, facilisis maximus augue.',
	  loveIts: 3,
	  created_at: new Date()
	},{
	  title: 'Second article',
	  content: 'Pellentesque elementum lectus sit amet est scelerisque, sit amet malesuada velit porta. Phasellus at elit pulvinar, dictum justo et, condimentum sapien.',
	  loveIts: -3,
	  created_at: new Date()
	},{
	  title: 'Troisième article',
	  content: 'Quisque ipsum ante, consequat at tincidunt ac, cursus non odio. Donec pulvinar, enim ac eleifend rutrum, ligula est cursus risus, vel imperdiet mi mauris tincidunt justo. Donec posuere, risus vel mattis venenatis, ligula metus imperdiet velit, in viverra sapien magna varius ante. Vestibulum et ante rutrum sapien consequat eleifend. Pellentesque in pharetra enim.',
	  loveIts: 0,
	  created_at: new Date()
	} 
  ]
  
  constructor() {
	  //set arbitraire de dates un peu plus différentes ...
	  this.posts[0].created_at.setDate(this.posts[0].created_at.getDate()-5);
	  this.posts[1].created_at.setDate(this.posts[1].created_at.getDate()-11);
	  this.posts[2].created_at.setDate(this.posts[2].created_at.getDate()-45);
  }
  
}
