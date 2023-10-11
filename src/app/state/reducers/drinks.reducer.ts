import { createReducer, on } from '@ngrx/store';
import { DrinksState } from 'src/app/models/drinks.state';
import { loadDrinks, loadedDrinks } from '../actions/drink.actions';

//Estado inicial
export const initialState: DrinksState = { drinks: [] };

//reducers
export const drinksReducer = createReducer(
  initialState,
  on(loadDrinks, (state) => {
    return { ...state };
  }),
  on(loadedDrinks, (state, { drinks }) => {
    //photos que llega por props lo desestructuramos para obtener  photos
    return { ...state, drinks: [...drinks.slice(0, 30)] };
  })
);
