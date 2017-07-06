import { Injectable } from '@angular/core';

import { Board } from './board';
import { BoardCard } from './board-card';
import { BoardList } from './board-list';

@Injectable()
export class BoardsService {

  private boards: Board[];
  private lists: BoardList[];

  constructor() {
    this.boards = [
      {
        id: 1,
        title: 'The complete title of the Board 1',
        lists: [
          {
            id: 1,
            title: 'test1',
            description: 'description for test1',
            cards: [
              {id: 1, title: 'test1', description: 'description for test1'},
              {id: 2, title: 'test2', description: 'description for test2'},
              {id: 3, title: 'test3', description: 'description for test3'},
              {id: 4, title: 'test1', description: 'description for test1', img: 'http://fakeimg.pl/250x100/'},
              {id: 5, title: 'test2', description: 'description for test2'},
              {id: 6, title: 'test3', description: 'description for test3'},
              {id: 7, title: 'test3', description: 'description for test3'},
              {id: 8, title: 'test1', description: 'description for test1', img: 'http://fakeimg.pl/250x100/'},
              {id: 9, title: 'test2', description: 'description for test2', img: 'http://fakeimg.pl/250x100/'},
              {id: 10, title: 'test3', description: 'description for test3', img: 'http://fakeimg.pl/250x100/'},
              {id: 11, title: 'test3', description: 'description for test3'},
              {id: 12, title: 'test4', description: 'description for test4'}
            ]
          },
          {
            id: 2,
            title: 'test2',
            description: 'description for test2',
            cards: [
              {id: 1, title: 'test1', description: 'description for test1'},
              {id: 2, title: 'test2', description: 'description for test2', img: 'http://fakeimg.pl/250x100/'}
            ]
          }
        ]
      }
    ];
  }

  find(id: number): Board {
    return this.boards.find((board) => board.id == id);
  }
}
