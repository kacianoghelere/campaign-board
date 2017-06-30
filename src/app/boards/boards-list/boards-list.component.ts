import { Component, OnInit } from '@angular/core';

import { Board } from '../board';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.css']
})
export class BoardsListComponent implements OnInit {

  boardId: number = 1;
  boards: Board[];

  constructor() {
    this.boards = [];
  }

  addBoard() {
    let id = this.boardId++;
    this.boards.push({
      id: id,
      title: `Test${id}`,
      description: `description for test${id}`,
      favorite: (id % 2 == 0)
    });
  }

  getFavoriteBoards(): Board[] {
    return this.boards.filter((v) => v.favorite);
  }

  getFavoriteClass(board: Board): any {
    return {'fa-star': board.favorite, 'fa-star-o': !board.favorite};
  }

  toggleFavorite(board: Board) {
    board.favorite = !board.favorite;
  }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.addBoard();
    }
  }
}
