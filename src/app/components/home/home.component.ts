import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadDrinks } from 'src/app/state/actions/drink.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListDrinks } from 'src/app/state/selectors/drink.selector';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  drinks$ : Observable<any> = new Observable();

  constructor(private store: Store<AppState>){
    this.drinks$ = this.store.select(selectListDrinks);
  }

  ngOnInit(): void {
   this.store.dispatch(loadDrinks());
  }

}
