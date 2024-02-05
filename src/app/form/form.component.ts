import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NgxCurrencyDirective } from 'ngx-currency';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    NgxCurrencyDirective,
  ],
  providers: [provideNativeDateAdapter(), CurrencyPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      date: ['', Validators.required],
      currency: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { date, currency } = this.form.value;
      console.log('Submitted date:', date.toISOString());
      console.log('Submitted currency:', currency);
    }
  }
}
