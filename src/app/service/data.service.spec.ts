import { TestBed } from '@angular/core/testing';

import { Data } from '../data.model';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('storeValue', () => {
    it('should add data to storedData', () => {
      let storedData: Data[] = [];
      const data = { date: new Date(), amount: 100 };
      service.storeValue(data);

      const subscription = service.storedData$.subscribe((data) => {
        storedData = data;
      });
      subscription.unsubscribe();

      expect(storedData).toContain(data);

      /* If the parsing is successful and the resulting date object's NaN property is false,
       then the string can be considered valid ISO 8601 */
      const isIso8601 = !isNaN(Date.parse(storedData[0].date.toISOString()));
      expect(isIso8601).toBeTrue;
    });
  });

  describe('clearValues', () => {
    it('should clear storedData', () => {
      let storedData: Data[] = [];

      service['storedData'] = [{ date: new Date(), amount: 100 }];
      service.clearValues();

      const subscription = service.storedData$.subscribe((data) => {
        storedData = data;
      });
      subscription.unsubscribe();

      expect(storedData).toEqual([]);
    });
  });
});
