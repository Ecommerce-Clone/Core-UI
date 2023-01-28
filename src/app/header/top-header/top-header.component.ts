import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.sass'],
})
export class TopHeaderComponent implements OnInit {
  categories: string[] = [
    'All Categories',
    'Alexa Skills',
    'Amazon Devices',
    'Amazon Fashion',
    'Amazon Pharmacy',
    'Appliances',
    'Apps & Games',
    'Baby',
    'Beauty',
    'Books',
    'Car & Motorbike',
    'Clothing & Accessories',
    'Collectibles',
    'Computers & Accessories',
    'Deals',
    'Electronics',
    'Furniture',
    'Garden & Outdoors',
    'Gift Cards',
    'Grocery & Gourmet Foods',
    'Health & Personal Care',
    'Home & Kitchen',
    'Industrial & Scientific',
    'Jewellery',
    'Kindle Store',
    'Luggage & Bags',
    'Movies & TV Shows',
    'Music',
    'Musical Instruments',
    'Office Products',
    'Pet Supplies',
    'Prime Video',
    'Same-Day Delivery',
    'Shoes & Handbags',
    'Software',
    'Sports, Fitness & Outdoors',
    'Subscribe & Save',
    'Tools & Home Improvement',
    'Toys & Games',
    'Under ₹500',
    'Video Games',
    'Watches',
  ];

  languages: { [key: string]: string } = {
    English: 'EN',
    हिन्दी: 'HI',
    தமிழ்: 'TA',
    తెలుగు: 'TE',
    ಕನ್ನಡ: 'KN',
    മലയാളം: 'ML',
    বাংলা: 'BN',
    मराठी: 'MR',
  };

  selected = { English: 'EN' };

  constructor() {}

  ngOnInit(): void {}
}
