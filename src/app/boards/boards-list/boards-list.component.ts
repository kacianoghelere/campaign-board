import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.css']
})
export class BoardsListComponent implements OnInit {

  boards: Board[];

  constructor() {
    this.boards = [
      {id: 1, title: 'test1', description: 'description for test1'},
      {id: 2, title: 'test2', description: 'description for test2'},
      {id: 3, title: 'test3', description: 'description for test3'},
      {id: 4, title: 'test4', description: 'description for test4'},
      {id: 5, title: 'test5', description: 'description for test5'},
      {id: 6, title: 'test6', description: 'description for test6'},
      {id: 7, title: 'test7', description: 'description for test7'},
      {id: 8, title: 'test8', description: 'description for test8'},
      {id: 9, title: 'test9', description: 'description for test9'}
    ]
  }

  ngOnInit() {
  }

}

export interface Board {
  id: number;
  title: string;
  description: string;
}
