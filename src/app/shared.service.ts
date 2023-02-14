import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private sidenavOpened = new BehaviorSubject<boolean>(false);
  currentSidenavOpened = this.sidenavOpened.asObservable();

  constructor() {}

  changeSidenavOpened(sidenavOpened: boolean) {
    this.sidenavOpened.next(sidenavOpened);
  }
}
