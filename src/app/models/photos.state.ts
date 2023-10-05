import { Photo } from "./photo.model.interface";

export interface PhotoState{
  loading: boolean,
  photos: Photo[]
}
