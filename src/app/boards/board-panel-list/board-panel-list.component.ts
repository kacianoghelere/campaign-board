import { Component, OnInit, Input } from '@angular/core';

import { BoardList } from '../board-list';

@Component({
  selector: 'board-panel-list',
  templateUrl: './board-panel-list.component.html',
  styleUrls: ['./board-panel-list.component.css']
})
export class BoardPanelListComponent implements OnInit {

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
