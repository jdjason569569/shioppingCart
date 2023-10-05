import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PhotoState } from "src/app/models/photos.state";

//Retorna toda la informacion del store
export const selectPhotosFeature = (state: AppState) => state.photos; //Selector para obtener todos los datos

//Esta funcion retorna sola la propiedad photos
export const selectListPhotos = createSelector(
  selectPhotosFeature, (state:PhotoState) => state.photos
);


export const selectLoading = createSelector(
  selectPhotosFeature, (state:PhotoState) => state.loading
);
