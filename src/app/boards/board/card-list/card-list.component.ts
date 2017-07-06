import { Component, OnInit, Input } from '@angular/core';

import { BoardList } from '../../board-list';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input('list') list: BoardList;

  constructor() { }

  addCard(list: BoardList): void {
    list.cards.push({
      id: 1,
      title: 'test1',
      description: 'description for test1'
    });
  }

  ngOnInit() {
  }

}
