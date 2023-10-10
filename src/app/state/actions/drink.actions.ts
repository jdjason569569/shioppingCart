import { createAction, props } from "@ngrx/store";
import { Drink } from "src/app/models/drink.model.interface";


export const loadDrinks = createAction(
  '[Drink List] load drinks'
)

export const loadedDrinks = createAction(
  '[Drink List] loaded success',
  props<{drinks: Drink[]}>()
)
