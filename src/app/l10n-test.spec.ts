import {createServiceFactory, SpectatorService} from '@ngneat/spectator/jest';
import {TranslocoModule} from '@ngneat/transloco';
import {
  TranslocoCurrencyPipe,
  TranslocoDatePipe,
  TranslocoDecimalPipe,
  TranslocoLocaleModule,
  TranslocoLocaleService,
  TranslocoPercentPipe
} from '@ngneat/transloco-locale';
import {L10nTestService} from './l10n-test.service';

describe('L10ntestService', () => {
  let spectator: SpectatorService<L10nTestService>;
  const createService = createServiceFactory<L10nTestService>({
    service: L10nTestService,
    imports: [
      TranslocoModule,
      TranslocoLocaleModule.init()
    ],
    providers: [TranslocoDecimalPipe, TranslocoPercentPipe, TranslocoCurrencyPipe, TranslocoDatePipe, TranslocoLocaleService]
  });

  beforeEach(() => spectator = createService());

  it('decimal value should be transformed', () => {
    expect(spectator.service.decimalValue).toBe('1,234,567,890.123');
  });
});
