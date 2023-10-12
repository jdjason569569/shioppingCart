import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ShoppingCartState } from 'src/app/models/ShoppingCartState';

//Retorna toda la informacion del store
export const selectDrinksFeature = (state: AppState) => state.shoppingCart; //Selector para obtener todos los datos

export const selectcountCart = createSelector(
  selectDrinksFeature,
  (state: ShoppingCartState) => {
    return state.drinks.length;
  }
);

export const showDrinksSelected = createSelector(
  selectDrinksFeature,
  (state: ShoppingCartState) => {
    return state.drinks;
  }
);
