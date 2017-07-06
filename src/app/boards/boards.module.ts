import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './boards.component';
import { BoardsListComponent } from './boards-list/boards-list.component';
import { BoardComponent } from './board/board.component';
import { BoardsService } from './boards.service';
import { BoardCardComponent } from './board-card/board-card.component';
import { CardListComponent } from './board/card-list/card-list.component';
import { CardComponent } from './board/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BoardsRoutingModule
  ],
  declarations: [
    BoardsComponent,
    BoardsListComponent,
    BoardComponent,
    BoardCardComponent,
    CardListComponent,
    CardComponent
  ],
  exports: [
    BoardCardComponent,
    CardListComponent
  ],
  providers: [BoardsService]
})
export class BoardsModule { }
