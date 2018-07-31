import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {featureReducer} from './reducer';
import {EffectsModule} from '@ngrx/effects';
import {JokeStoreEffects} from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('joke', featureReducer),
    EffectsModule.forFeature([JokeStoreEffects])
  ],
  providers: [JokeStoreEffects]
})
export class JokeStoreModule { }
