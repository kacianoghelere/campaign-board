import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './icon/icon.component';
import { BoolIconComponent } from './bool-icon/bool-icon.component';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [IconComponent, BoolIconComponent, FavoriteIconComponent],
  exports: [IconComponent, BoolIconComponent, FavoriteIconComponent]
})
export class UtilModule { }
