import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { configReducers } from './config.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  config: configReducers,
};
