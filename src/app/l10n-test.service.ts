import {Injectable} from '@angular/core';
import {
  TranslocoCurrencyPipe,
  TranslocoDatePipe,
  TranslocoDecimalPipe,
  TranslocoLocaleService,
  TranslocoPercentPipe
} from '@ngneat/transloco-locale';

@Injectable({providedIn: 'root'})
export class L10nTestService {
  decimalValue: string;
  percentValue: string;
  dateValue: string;
  currencyValue: string;
  localizedDecimal: string;
  localizedPercent: string;
  localizedDate: string;
  localizedCurrency: string;

  constructor(
    private translocoDecimalPipe: TranslocoDecimalPipe,
    private translocoDatePipe: TranslocoDatePipe,
    private translocoPercentPipe: TranslocoPercentPipe,
    private translocoCurrencyPipe: TranslocoCurrencyPipe,
    private translocoLocaleService: TranslocoLocaleService
  ) {
    const date = new Date();
    this.decimalValue = translocoDecimalPipe.transform(1234567890.123456);
    this.percentValue = translocoPercentPipe.transform(0.99);
    this.dateValue = translocoDatePipe.transform(date);
    this.currencyValue = translocoCurrencyPipe.transform(1000000);

    this.localizedDecimal = this.translocoLocaleService.localizeNumber(1234567890.123456, 'decimal');
    this.localizedPercent = this.translocoLocaleService.localizeNumber(0.99, 'percent');
    this.localizedDate = this.translocoLocaleService.localizeDate(date);
    this.localizedCurrency = this.  translocoLocaleService.localizeNumber(1000000, 'currency', this.translocoLocaleService.getLocale(), {});
  }
}
