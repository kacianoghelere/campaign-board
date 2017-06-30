import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './boards.component';
import { BoardsListComponent } from './boards-list/boards-list.component';
import { BoardComponent } from './board/board.component';
import { BoardsService } from './boards.service';

@NgModule({
  imports: [
    CommonModule,
    BoardsRoutingModule
  ],
  declarations: [BoardsComponent, BoardsListComponent, BoardComponent],
  providers: [BoardsService]
})
export class BoardsModule { }
