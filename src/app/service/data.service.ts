import { Injectable, computed, signal } from '@angular/core';
import { Data } from '../data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private signalData$ = signal<Data[]>([]);
  public storedData = computed(() => this.sortByDate(this.signalData$()));

  constructor() {
    const storedData = sessionStorage.getItem('storedValues');
    if (storedData) {
      this.signalData$.set(JSON.parse(storedData));
    }
  }

  public storeValue(data: Data): void {
    this.signalData$.update((oldData) => [...oldData, data]);
    sessionStorage.setItem('storedValues', JSON.stringify(this.signalData$()));
  }

  public clearValues(): void {
    this.signalData$.set([]);
    sessionStorage.removeItem('storedValues');
  }

  private sortByDate(data: Data[]): Data[] {
    return data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }
}
