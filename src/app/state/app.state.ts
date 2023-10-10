import { ActionReducerMap } from "@ngrx/store";
import { PhotoState } from "../models/photos.state";
import { photosReducer } from "./reducers/photos.reducers";
import { DrinksState } from "../models/drinks.state";
import { DrinksReducer } from "./reducers/drinks.reducer";

export interface AppState{
photos: PhotoState;
  drinks: DrinksState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
  photos: photosReducer,
  drinks: DrinksReducer
}
