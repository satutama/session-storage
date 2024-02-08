import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Data } from '../data.model';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private storedData: Data[] = [];
  private storedDataSubject = new BehaviorSubject<Data[]>([]);

  public storedData$ = this.storedDataSubject
    .asObservable()
    .pipe(map((data) => this.sortByDate(data)));

  constructor() {
    const storedData = sessionStorage.getItem('storedValues');
    if (storedData) {
      this.storedData = JSON.parse(storedData);
      this.storedDataSubject.next(this.storedData);
    }
  }

  public storeValue(data: Data): void {
    this.storedData.push(data);
    this.storedDataSubject.next(this.storedData);
    sessionStorage.setItem('storedValues', JSON.stringify(this.storedData));
  }

  public clearValues(): void {
    this.storedData = [];
    this.storedDataSubject.next(this.storedData);
    sessionStorage.removeItem('storedValues');
  }

  private sortByDate(data: Data[]): Data[] {
    return data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }
}
