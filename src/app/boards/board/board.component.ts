import { Component, OnInit } from '@angular/core';

import { BoardsService } from '../boards.service';
import { Board } from '../board';
import { BoardCard } from '../board-card';
import { BoardList } from '../board-list';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: Board;

  constructor(private boardsService: BoardsService) {
    this.board = {
      id: null,
      title: "",
      lists: []
    };
  }

  addList(): void {
    this.board.lists.push({
      id: 1,
      title: 'New List',
      description: '',
      cards: []
    });
  }

  ngOnInit() {
    this.board = this.boardsService.find(1);
  }

}
