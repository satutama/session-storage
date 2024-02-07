import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Data } from '../data.model';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css',
})
export class DataListComponent {
  @Input() storedData!: Data[];
}
