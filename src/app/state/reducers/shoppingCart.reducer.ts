import { createReducer, on } from '@ngrx/store';
import { ShoppingCartState } from 'src/app/models/ShoppingCartState';
import { addDrink, deleteDrink } from '../actions/shoppingCart.actions';

//Estado inicial
export const initialState: ShoppingCartState = { drinks: [] };

//reducers
export const shoppingCartReducer = createReducer(
  initialState,
  on(addDrink, (state, { drink }) => {
    const updatedDrinks = [...state.drinks, drink];
    return { ...state, drinks: updatedDrinks };
  }),
  on(deleteDrink, (state, { idDrink }) => {
    const drinks = state.drinks.filter((item) => item.idDrink !== idDrink);
    return { ...state, drinks: drinks };
  })
);
