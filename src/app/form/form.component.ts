import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
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
import { Data } from '../data.model';
import { MY_DATE_FORMAT } from './utils/my-date-format';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [provideMomentDateAdapter(MY_DATE_FORMAT)],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() submitDataEvent = new EventEmitter<Data>();

  public minDate: Date = new Date(); // today's date
  public form: FormGroup = this.fb.group({
    date: [new Date(), Validators.required],
    amount: ['', [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  public onSubmit() {
    if (this.form.valid) {
      this.submitDataEvent.emit(this.form.value);

      this.form.reset({ date: new Date(), amount: '0' });
    }
  }
}
