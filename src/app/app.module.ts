import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BoardsModule } from './boards/boards.module';
import { HomeModule } from './home/home.module';
import { UtilModule } from './util/util.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BoardsModule,
    HomeModule,
    UtilModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
