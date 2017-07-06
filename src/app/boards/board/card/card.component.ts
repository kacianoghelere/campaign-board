import { Component, OnInit, Input } from '@angular/core';

import { BoardCard } from '../../board-card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: BoardCard;

  constructor() { }

  ngOnInit() {
  }

}
