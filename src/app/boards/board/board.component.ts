import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  lists: List[];

  constructor() {
    this.lists = [
      {id: 1, title: 'test1', description: 'description for test1'},
      {id: 2, title: 'test2', description: 'description for test2'},
      {id: 3, title: 'test3', description: 'description for test3'},
      {id: 4, title: 'test4', description: 'description for test4'}
    ];
  }

  ngOnInit() {
  }

}
export interface List {
  id: number;
  title: string;
  description: string;
}
