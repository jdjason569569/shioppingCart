import { ActionReducerMap } from '@ngrx/store';
import { PhotoState } from '../models/photos.state';
import { photosReducer } from './reducers/photos.reducers';
import { DrinksState } from '../models/drinks.state';
import { drinksReducer } from './reducers/drinks.reducer';
import { ShoppingCartState } from '../models/ShoppingCartState';
import { shoppingCartReducer } from './reducers/shoppingCart.reducer';

export interface AppState {
  photos: PhotoState;
  drinks: DrinksState;
  shoppingCart: ShoppingCartState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  photos: photosReducer,
  drinks: drinksReducer,
  shoppingCart: shoppingCartReducer,
};
