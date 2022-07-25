import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListagemComponent } from './features/colaboradores/listagem/listagem.component';
import { FeaturesModule } from './features/features.module';
import { SellModule } from './features/sell/sell.module';
import { SharedModule } from './shared/shared.module';

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
    SharedModule,
    FeaturesModule,
    SellModule
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
