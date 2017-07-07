import { Component, OnInit, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BoardPanelEditorComponent } from '../board-panel-editor/board-panel-editor.component';
import { BoardCard } from '../board-card';

@Component({
  selector: 'board-panel-card',
  templateUrl: './board-panel-card.component.html',
  styleUrls: ['./board-panel-card.component.css']
})
export class BoardPanelCardComponent implements OnInit {

  @Input() card: BoardCard;

  constructor(private modalService: NgbModal) {}

  public openEditor() {
    const modalRef = this.modalService.open(BoardPanelEditorComponent);
    modalRef.componentInstance.card = this.card;
  }

  ngOnInit() {
  }

}
