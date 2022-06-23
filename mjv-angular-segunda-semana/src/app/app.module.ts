import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CorpoComponent } from './corpo/corpo.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './shared/shared.module';
import { SellModule } from './features/sell/sell.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CorpoComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
