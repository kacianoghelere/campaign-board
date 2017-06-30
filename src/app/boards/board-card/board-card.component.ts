import { Component, Input, OnInit } from '@angular/core';

import { Board } from '../board';

@Component({
  selector: 'board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.css']
})
export class BoardCardComponent implements OnInit {

  @Input() board: Board;

  constructor() { }

  toggleFavorite() {
    this.board.favorite = !this.board.favorite;
  }

  getFavoriteClass(): any {
    return {'fa-star': this.board.favorite, 'fa-star-o': !this.board.favorite};
  }

  ngOnInit() {
  }
}
