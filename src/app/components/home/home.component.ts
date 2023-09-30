import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  loading$ : Observable<boolean> = new Observable();
  photos$ : Observable<any> = new Observable();

  constructor(){

  }

  ngOnInit(): void {

  }

}
