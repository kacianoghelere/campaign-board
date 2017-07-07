import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BoardList } from '../board-list';

@Component({
  selector: 'board-panel-list',
  templateUrl: './board-panel-list.component.html',
  styleUrls: ['./board-panel-list.component.css']
})
export class BoardPanelListComponent implements OnInit {

  @Input('list') list: BoardList;
  @Output('removeBoardList') removeBoardList: EventEmitter<number>;

  constructor() {
    this.removeBoardList = new EventEmitter();
  }

  addCard(): void {
    this.list.cards.push({
      id: 1,
      title: 'test1',
      description: 'description for test1'
    });
  }

  public removeList() {
    this.removeBoardList.emit(this.list.id);
  }

  ngOnInit() {
  }
}
