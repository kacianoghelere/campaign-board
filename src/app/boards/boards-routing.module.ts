import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardsComponent } from './boards.component';
import { BoardComponent } from './board/board.component';
import { BoardsListComponent } from './boards-list/boards-list.component';

const routes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
    children: [
      {path: '', component: BoardsListComponent},
      {path: ':id', component: BoardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
