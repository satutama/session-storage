import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { DataListComponent } from '../data-list/data-list.component';
import { Data } from '../data.model';
import { FormComponent } from '../form/form.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, FormComponent, DataListComponent, MatButtonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  public storedData$: Observable<Data[]> = this.dataService.storedData$;

  constructor(private dataService: DataService) {}

  public submitDataEvent(data: Data): void {
    this.dataService.storeValue(data);
  }

  public clearData(): void {
    this.dataService.clearValues();
  }
}
