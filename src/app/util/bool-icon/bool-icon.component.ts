import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bool-icon',
  templateUrl: './bool-icon.component.html',
  styleUrls: ['./bool-icon.component.css']
})
export class BoolIconComponent implements OnInit {

  @Input() falseName: string;
  @Input() flag: boolean;
  @Input() trueName: string;

  constructor() { }

  getName(): string {
    return this.flag ? this.trueName : this.falseName;
  }

  ngOnInit() {
  }

}
