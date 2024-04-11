import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { UsersComponent } from './dashboard/users/users.component';
import { userReducer } from './app-store/reducers/user-reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './app-store/effects/user.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { appReducer } from './app-store/reducers/app-reducer';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { CustomSerializer } from './app-store/router/custom-route-serializer';
import { UserDetailsComponent } from './dashboard/user-details/user-details.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AsideComponent } from './dashboard/aside/aside.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { MaterialModule } from './modules/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoadingSpinnerComponent,
    UserDetailsComponent,
    HomeComponent,
    AsideComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialModule,
    SlickCarouselModule,
    FormsModule,
    StoreModule.forRoot({users:userReducer , app:appReducer , router:routerReducer}),
    EffectsModule.forRoot([UserEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
