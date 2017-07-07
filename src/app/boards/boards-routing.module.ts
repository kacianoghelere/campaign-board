import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardsComponent } from './boards.component';
import { BoardPanelComponent } from './board-panel/board-panel.component';
import { BoardsListComponent } from './boards-list/boards-list.component';

const routes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
    children: [
      {path: '', component: BoardsListComponent},
      {path: ':id', component: BoardPanelComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
