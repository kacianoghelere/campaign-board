import { Component, OnInit, Input } from '@angular/core';

import { BoardCard } from '../board-card';

@Component({
  selector: 'board-panel-card',
  templateUrl: './board-panel-card.component.html',
  styleUrls: ['./board-panel-card.component.css']
})
export class BoardPanelCardComponent implements OnInit {

  @Input() card: BoardCard;

  constructor() { }

  ngOnInit() {
  }

}
