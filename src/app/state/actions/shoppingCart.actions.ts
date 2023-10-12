import { createAction, props } from "@ngrx/store";
import { Drink } from "src/app/models/drink.model.interface";


export const addDrink = createAction(
  '[ShoppingCart add] add drink',
  props<{drink: Drink}>()
)

export const deleteDrink = createAction(
  '[ShoppingCart delete] delete drink',
  props<{idDrink: number}>()
)

export const showDrinks = createAction(
  '[ShoppingCart show] show drinks'
)


