import {TranslocoDecimalPipe, TranslocoLocaleModule, TranslocoLocaleService} from '@ngneat/transloco-locale';
import {createServiceFactory, SpectatorService} from '@ngneat/spectator/jest';
import {TranslocoModule} from '@ngneat/transloco';
import {Injectable} from '@angular/core';

// testing with translocoLocaleService.localizeXXX
@Injectable({providedIn: 'root'})
class LocalizeTestService {
  decimalValue: string;

  constructor(private translocoLocaleService: TranslocoLocaleService) {
    this.decimalValue = this.translocoLocaleService.localizeNumber(1234567890.123456, 'decimal');
  }
}


describe('Using TranslocoLocaleService Localize Functions in a Service', () => {
  let spectator: SpectatorService<LocalizeTestService>;
  const createService = createServiceFactory<LocalizeTestService>({
    service: LocalizeTestService,
    imports: [TranslocoModule, TranslocoLocaleModule.init()],
    providers: [TranslocoLocaleService]
  });
  beforeEach(() => spectator = createService());
  it('decimal value should be transformed', () => {
    expect(spectator.service.decimalValue).toBe('1,234,567,890.123');
  });
});


// testing with translocoLocaleService pipes injected into service
@Injectable({providedIn: 'root'})
class PipesTestService {
  decimalValue: string;

  constructor(private translocoDecimalPipe: TranslocoDecimalPipe) {
    this.decimalValue = this.translocoDecimalPipe.transform(1234567890.123456);
  }
}


describe('Using TranslocoLocale Pipes in a Service', () => {
  let spectator: SpectatorService<PipesTestService>;
  const createService = createServiceFactory<PipesTestService>({
    service: PipesTestService,
    imports: [TranslocoModule, TranslocoLocaleModule.init()],
    providers: [TranslocoDecimalPipe]
  });
  beforeEach(() => spectator = createService());
  it('decimal value should be transformed', () => {
    expect(spectator.service.decimalValue).toBe('1,234,567,890.123');
  });
});
