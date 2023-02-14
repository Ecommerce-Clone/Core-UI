import { Component, Output } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-lower-header',
  templateUrl: './lower-header.component.html',
  styleUrls: ['./lower-header.component.sass'],
})
export default class LowerHeaderComponent {
  sidenavOpen!: boolean;
  list1: string[] = [
    'Amazon miniTV',
    'Best Sellers',
    'Mobiles',
    "Today's Deals",
    'Customer Service',
    'Electronics',
    'Prime',
    'Fashion',
    'Amazon Pay',
    'Home & kitchen',
  ];

  constructor(private sharedService: SharedService) {
    this.sharedService.currentSidenavOpened.subscribe((value) => {
      this.sidenavOpen = value;
    });
  }

  emitToggleValue(value: boolean) {
    this.sharedService.changeSidenavOpened(!value);
  }
}
