import { NgxCurrencyConfig, NgxCurrencyInputMode } from 'ngx-currency';

export const CURRENCY_CONFIG: NgxCurrencyConfig = {
  align: 'right',
  allowNegative: false,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: '€',
  suffix: '',
  thousands: '.',
  nullable: true,
  inputMode: NgxCurrencyInputMode.Natural,
};
