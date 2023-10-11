import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectcountCart } from 'src/app/state/selectors/shoppingCart.selector';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  cart$ : Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {
    this.cart$ = this.store.select(selectcountCart);
  }

}
