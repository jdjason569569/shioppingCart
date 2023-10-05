import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from 'src/app/models/drink.model.interface';
import { DrinksService } from 'src/app/services/drinks.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  drinks$ : Observable<any> = new Observable();

  constructor(private drinksService: DrinksService){

  }

  ngOnInit(): void {
    this.drinks$ =  this.drinksService.getDrinks();

  }

}
