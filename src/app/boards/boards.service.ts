import { Injectable } from '@angular/core';

import { BoardCard } from './board-card';
import { BoardList } from './board-list';

@Injectable()
export class BoardsService {

  private lists: BoardList[];

  constructor() {
    this.lists = [
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
      },
      {
        id: 3,
        title: 'test3',
        description: 'description for test3',
        cards: [
          {id: 1, title: 'test1', description: 'description for test1', img: 'http://fakeimg.pl/250x100/'}
        ]
      },
      {
        id: 4,
        title: 'test4',
        description: 'description for test4',
        cards: [
          {id: 1, title: 'test1', description: 'description for test1'},
          {id: 2, title: 'test2', description: 'description for test2', img: 'http://fakeimg.pl/250x100/'},
          {id: 3, title: 'test3', description: 'description for test3'},
          {id: 4, title: 'test4', description: 'description for test4'}
        ]
      },
      {
        id: 5,
        title: 'test5',
        description: 'description for test5',
        cards: [
          {id: 1, title: 'test1', description: 'description for test1'},
          {id: 2, title: 'test2', description: 'description for test2'}
        ]
      },
      {
        id: 6,
        title: 'test6',
        description: 'description for test6',
        cards: [
          {id: 1, title: 'test1', description: 'description for test1', img: 'http://fakeimg.pl/250x100/'},
          {id: 2, title: 'test2', description: 'description for test2'},
          {id: 3, title: 'test3', description: 'description for test3'}
        ]
      }
    ];
  }

  getList(): BoardList[] {
    return this.lists;
  }
}
