import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import {
  TranslocoCurrencyPipe,
  TranslocoDatePipe,
  TranslocoDecimalPipe,
  TranslocoLocaleModule,
  TranslocoPercentPipe
} from '@ngneat/transloco-locale';
import {L10nTestService} from './l10n-test.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule,
    TranslocoLocaleModule.init()
  ],
  providers: [L10nTestService, TranslocoDecimalPipe, TranslocoPercentPipe, TranslocoCurrencyPipe, TranslocoDatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
