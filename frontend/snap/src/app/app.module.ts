import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { CardComponent } from './components/card/card.component';
import { DatasetService } from './services/dataset/DatasetService';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list/listitem/listitem.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CardComponent,
    ListComponent,
    ListItemComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [DatasetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
