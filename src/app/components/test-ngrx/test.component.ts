import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPhotos } from '../../state/actions/photos.actions';
import { Observable } from 'rxjs';
import { selectListPhotos, selectLoading } from '../../state/selectors/photo.selectors';
import { AppState } from '../../state/app.state';


@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  loading$ : Observable<boolean> = new Observable();
  photos$ : Observable<any> = new Observable();

  constructor(private store: Store<AppState>){
    this.loading$ = this.store.select(selectLoading)
    this.photos$ = this.store.select(selectListPhotos);
  }

  ngOnInit(): void {
      this.store.dispatch(loadPhotos());
  }

}
