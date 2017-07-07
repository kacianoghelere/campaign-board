import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPanelEditorComponent } from './board-panel-editor.component';

describe('BoardPanelEditorComponent', () => {
  let component: BoardPanelEditorComponent;
  let fixture: ComponentFixture<BoardPanelEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardPanelEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPanelEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
