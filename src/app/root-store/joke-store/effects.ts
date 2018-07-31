import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {DataService} from '../../services';
import {Observable, of as observableOf} from 'rxjs';
import {Action} from '@ngrx/store';
import * as featureActions from './actions';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Injectable()
export class JokeStoreEffects{
  constructor(private dataService: DataService, private action$ : Actions){}

  @Effect()
  loadRequestEffect$: Observable<Action> = this.action$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST
    ),
    startWith( new featureActions.LoadRequestAction()),
    switchMap(action =>
      this.dataService
        .getJokes()
        .pipe(
          map(
            items =>
              new featureActions.LoadSuccessAction({
                items
              })
            ),
          catchError(error =>
            observableOf(new featureActions.LoadFailureAction({error})
          )
        )
      )
    )
  );
}
