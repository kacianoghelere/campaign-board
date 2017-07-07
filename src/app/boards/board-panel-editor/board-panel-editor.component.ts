import { Component, Input, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { BoardCard } from '../board-card';

@Component({
  selector: 'board-panel-editor',
  templateUrl: './board-panel-editor.component.html',
  styleUrls: ['./board-panel-editor.component.css']
})
export class BoardPanelEditorComponent implements OnInit {

  @Input() card: BoardCard;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
