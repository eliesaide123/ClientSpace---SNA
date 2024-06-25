// shared/services/data-sync.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSyncService {
  private clientInfoLoadedSubject = new BehaviorSubject<boolean>(false);

  clientInfoLoaded$ = this.clientInfoLoadedSubject.asObservable();

  setClientInfoLoaded(isLoaded: boolean) {
    this.clientInfoLoadedSubject.next(isLoaded);
  }
}
