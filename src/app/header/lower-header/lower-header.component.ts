import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-header',
  templateUrl: './lower-header.component.html',
  styleUrls: ['./lower-header.component.sass']
})
export default class LowerHeaderComponent implements OnInit {
  
  list1 :string[] = [
    'Amazon miniTV',
    'Best Sellers',
    'Mobiles',
    'Today\'s Deals',
    'Customer Service',
    'Electronics',
    'Prime',
    'Fashion',
    'Amazon Pay',
    'Home & kitchen'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
