import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { BoardsService } from '../boards.service';
import { Board } from '../board';
import { BoardCard } from '../board-card';
import { BoardList } from '../board-list';

@Component({
  selector: 'app-board-panel',
  templateUrl: './board-panel.component.html',
  styleUrls: ['./board-panel.component.css']
})
export class BoardPanelComponent implements OnInit {

  id: number;
  subscription: Subscription;
  board: Board;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private boardsService: BoardsService
  ) {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.board = this.boardsService.find(this.id);
      if (!this.board) this.notFound();
    });
  }

  private notFound() {
    console.log("Not found!");
    this.router.navigate(["/boards"]);
  }

  addList(): void {
    let list: BoardList = {
      id: 1,
      title: 'New List',
      description: '',
      cards: []
    };
    this.board.lists.push(list);
  }

  ngOnInit() {
  }
}
