import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(private http: HttpClient) { }

  getDrinks(){
    return this.http.get<any>("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink").pipe(map(value =>{
      return value.drinks;
    }))
  }
}
