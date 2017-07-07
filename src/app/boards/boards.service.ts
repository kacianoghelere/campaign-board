import { Injectable } from '@angular/core';

import { Board } from './board';
import { BoardCard } from './board-card';
import { BoardList } from './board-list';

@Injectable()
export class BoardsService {

  private boards: Board[];
  private lists: BoardList[];

  constructor() {
    this.boards = [];
    for (let i = 0; i < 20; i++) {
      this.create(true);
    }
  }

  private getNextId(): number {
    return (this.boards.length + 1);
  }

  public mockCards(list: BoardList) {
    let cardAmount: number = this.getRandom(1, 20);
    for (let j = 0; j < cardAmount; j++) {
      let cardId = (j + 1);
      let card: BoardCard = {
        id: cardId,
        title: `Card ${list.id}-${cardId}`,
        description: '',
        img: (cardAmount - cardId) % 3 == 0 ?  'http://fakeimg.pl/300x500/' : ''
      };
      list.cards.push(card);
    }
  }

  public mockLists(board: Board) {
    let listAmount: number = this.getRandom(1, 10);
    for (let i = 0; i < listAmount; i++) {
      let cardAmount: number = this.getRandom(1, 20);
      let listId = (i + 1);
      let list: BoardList = {
        id: listId,
        title: `List ${listId}`,
        description: '',
        cards: []
      };
      this.mockCards(list);
      board.lists.push(list);
    }
  }

  /**
   * Needs own service
   */
  private getRandom(min: number, max: number) {
    return (Math.floor(Math.random() * max) + min);
  }

  public create(mockData: boolean = false): number {
    let boardId = this.getNextId();
    let board: Board = {
      id: boardId,
      title: `Complete title of the Board ${boardId}`,
      favorite: false,
      lists: []
    };
    if (mockData) this.mockLists(board); // Mock data in the board
    this.boards.push(board);
    return boardId;
  }

  public find(id: number): Board {
    return this.boards.find((board) => board.id == id);
  }

  public list(): Board[] {
    return this.boards;
  }
}
