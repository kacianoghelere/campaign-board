import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Board } from '../board';
import { BoardsService } from '../boards.service';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.css']
})
export class BoardsListComponent implements OnInit {

  boardId: number = 1;
  boards: Board[];

  constructor(
    private router: Router,
    private boardsService: BoardsService
  ) {
    this.boards = this.boardsService.list();
  }

  addBoard() {
    let boardId = this.boardsService.create();
    this.router.navigate(["/boards", boardId]);
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
  }
}
