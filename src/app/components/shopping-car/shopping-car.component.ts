import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteDrink, showDrinks } from 'src/app/state/actions/shoppingCart.actions';
import { AppState } from 'src/app/state/app.state';
import { showDrinksSelected } from 'src/app/state/selectors/shoppingCart.selector';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css']
})
export class ShoppingCarComponent {
  drinks$ : Observable<any> = new Observable();

  constructor(private store: Store<AppState>){
    this.drinks$ = this.store.select(showDrinksSelected);
  }

  ngOnInit(): void {
   this.store.dispatch(showDrinks());
  }

  deleteDrink(idDrink: number){
    this.store.dispatch(deleteDrink({idDrink}));
  }

}
