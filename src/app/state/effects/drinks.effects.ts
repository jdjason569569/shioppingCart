import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, mergeMap } from 'rxjs';
import { DrinksService } from 'src/app/services/drinks.service';
import { loadDrinks } from '../actions/drink.actions';

@Injectable()
export class DrinksEffects {
  constructor(
    private actions$: Actions,
    private drinksService: DrinksService
  ) {}

  //Permite lanzar el effect cuando escucha una accion
  loadPhotosV1$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDrinks),
      mergeMap(() =>
        this.drinksService.getDrinks().pipe(
          map((drinks) => ({ type: '[Drink List] loaded success', drinks })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
