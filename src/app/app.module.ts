import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects'
import { HomeComponent } from './components/home/home.component';
import { ROOT_REDUCERS } from './state/app.state';
import { PhotosEffects } from './state/effects/photos.effects';
import { TestComponent } from './components/test-ngrx/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name:"TEST",maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([PhotosEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
