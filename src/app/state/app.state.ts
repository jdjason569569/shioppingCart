import { ActionReducerMap } from "@ngrx/store";
import { PhotoState } from "../models/photos.state";
import { photosReducer } from "./reducers/photos.reducers";

export interface AppState{
  photos: PhotoState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
  photos: photosReducer
}
