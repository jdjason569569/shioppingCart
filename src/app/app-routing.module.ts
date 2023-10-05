import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCarComponent } from './components/shopping-car/shopping-car.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shopping', component: ShoppingCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
