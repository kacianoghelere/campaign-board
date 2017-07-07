import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'favorite-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.css']
})
export class FavoriteIconComponent implements OnInit {

  @Input() favorite: boolean;

  constructor() { }

  ngOnInit() {
  }

}
