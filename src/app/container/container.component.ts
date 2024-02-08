import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';

import { DataListComponent } from '@components/data-list/data-list.component';
import { Data } from '@components/data.model';
import { FormComponent } from '@components/form/form.component';
import { DataService } from '@service/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [AsyncPipe, FormComponent, DataListComponent],
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
