import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeStoreModule} from './joke-store';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    JokeStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  declarations: []
})
export class RootStoreModule { }
