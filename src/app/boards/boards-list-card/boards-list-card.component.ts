import { Component, Input, OnInit } from '@angular/core';

import { Board } from '../board';

@Component({
  selector: 'boards-list-card',
  templateUrl: './boards-list-card.component.html',
  styleUrls: ['./boards-list-card.component.css']
})
export class BoardsListCardComponent implements OnInit {

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
