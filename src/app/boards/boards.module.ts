import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UtilModule } from '../util/util.module';
import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './boards.component';
import { BoardsListComponent } from './boards-list/boards-list.component';
import { BoardsListCardComponent } from './boards-list-card/boards-list-card.component';
import { BoardPanelComponent } from './board-panel/board-panel.component';
import { BoardPanelListComponent } from './board-panel-list/board-panel-list.component';
import { BoardPanelCardComponent } from './board-panel-card/board-panel-card.component';
import { BoardsService } from './boards.service';
import { BoardPanelEditorComponent } from './board-panel-editor/board-panel-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    UtilModule,
    BoardsRoutingModule
  ],
  declarations: [
    BoardsComponent,
    BoardsListComponent,
    BoardsListCardComponent,
    BoardPanelComponent,
    BoardPanelListComponent,
    BoardPanelCardComponent,
    BoardPanelEditorComponent
  ],
  entryComponents: [
    BoardPanelEditorComponent
  ],
  providers: [BoardsService]
})
export class BoardsModule { }
