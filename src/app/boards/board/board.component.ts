import { Component, OnInit } from '@angular/core';

import { BoardsService } from '../boards.service';
import { BoardCard } from '../board-card';
import { BoardList } from '../board-list';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  lists: BoardList[];

  constructor(private boardsService: BoardsService) {
    this.lists = this.boardsService.getList();
  }

  addList(): void {
    this.lists.push({
      id: 1,
      title: 'test1',
      description: 'description for test1',
      cards: []
    });
  }

  ngOnInit() {
  }

}
