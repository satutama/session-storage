import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Data } from '@components/data.model';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, MatButtonModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css',
})
export class DataListComponent {
  @Input() storedData!: Data[];
  @Output() clearDataEvent = new EventEmitter();

  public clearData(): void {
    this.clearDataEvent.emit();
  }
}
