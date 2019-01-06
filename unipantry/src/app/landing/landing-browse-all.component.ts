import { Component } from '@angular/core';

@Component({
  selector: 'app-browse-all',
  templateUrl: './landing-browse-all.component.html',
  styleUrls: ['./landing.component.css']
})
export class BrowseAllComponent {
  images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(() => `https://picsum.photos/200/200?random&t=${Math.random()}`);

  constructor() { }
}
