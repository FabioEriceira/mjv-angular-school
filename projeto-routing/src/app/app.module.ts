
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';

// estes import aqui serve para formatação dos pipes
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule
  ],
  
  
  // esta configuração do provide é para a formatação do pipes do pt-br junto com os imports acima.
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
