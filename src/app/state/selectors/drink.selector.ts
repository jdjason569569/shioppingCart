import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { DrinksState } from "src/app/models/drinks.state";


//Retorna toda la informacion del store
export const selectDrinksFeature = (state: AppState) => state.drinks; //Selector para obtener todos los datos

//Esta funcion retorna sola la propiedad photos
export const selectListDrinks = createSelector(
  selectDrinksFeature, (state:DrinksState) => state.drinks
);
