import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Joke} from '../../models';

export function sortById(a: Joke, b: Joke): number{
    return b.id.toString().localeCompare(a.id);
}

export const featureAdapter: EntityAdapter<Joke> = createEntityAdapter<Joke>({
  selectId: model => model.id,
  sortComparer: sortById
});

export interface State extends EntityState<Joke>{
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null
});
