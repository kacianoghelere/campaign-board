import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './boards.component';
import { BoardsListComponent } from './boards-list/boards-list.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  imports: [
    CommonModule,
    BoardsRoutingModule
  ],
  declarations: [BoardsComponent, BoardsListComponent, BoardComponent]
})
export class BoardsModule { }
