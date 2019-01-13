import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-selected',
  templateUrl: './list-selected.component.html',
  styleUrls: ['./list-selected.component.css']
})
export class ListSelectedComponent implements OnInit {

  images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/225/225?random&t=${Math.random()}`);

  constructor() { }
  

  ngOnInit() {
  }
  

}
