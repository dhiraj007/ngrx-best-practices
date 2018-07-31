import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store';
import { JokesComponent } from './container/jokes/jokes/jokes.component';
import { JokeCardItemComponent } from './component/joke-card-item/joke-card-item.component';
import { JokeCardListComponent } from './component/joke-card-list/joke-card-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatProgressBarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    JokeCardItemComponent,
    JokeCardListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RootStoreModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
