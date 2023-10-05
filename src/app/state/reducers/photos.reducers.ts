import { createReducer, on } from "@ngrx/store";
import { loadPhotos, loadedPhotos } from "../actions/photos.actions";
import { PhotoState } from "src/app/models/photos.state";

//Estado inicial
export const initialState: PhotoState = {loading: false,photos: []}


//reducers
export const photosReducer = createReducer(
  initialState,
  on(loadPhotos, (state) => {
      return {...state, loading: true}
  }),
  on(loadedPhotos, (state, {photos}) => {  //photos que llega por props lo desestructuramos para obtener  photos
    return {...state, loading: false, photos: [...photos.slice(0, 10)]}
  }),

)
