import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import moment from 'moment';
import { NgxCurrencyConfig, NgxCurrencyDirective } from 'ngx-currency';
import { CURRENCY_CONFIG } from './utils/currency-option';
import { MY_DATE_FORMAT } from './utils/my-date-format';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    NgxCurrencyDirective,
  ],
  providers: [provideMomentDateAdapter(MY_DATE_FORMAT)],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  public form!: FormGroup;
  public ngxCurrencyOption: NgxCurrencyConfig = CURRENCY_CONFIG;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      date: [moment(), Validators.required],
      currency: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { date, currency } = this.form.value;
      console.log('Submitted date:', moment(date).toDate());
      console.log('Submitted currency:', currency);
    }
  }
}
