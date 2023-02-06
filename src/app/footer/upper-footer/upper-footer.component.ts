import { Component } from '@angular/core';

@Component({
  selector: 'app-upper-footer',
  templateUrl: './upper-footer.component.html',
  styleUrls: ['./upper-footer.component.sass'],
})
export class UpperFooterComponent {
  dropdown: boolean = false;

  aboutUs: string[] = [
    'About Us',
    'Careers',
    'Press Releases',
    'Amazon Science',
  ];

  connectWithUs: string[] = ['Facebook', 'Twitter', 'Instagram'];

  makeMoneyWithUs: string[] = [
    'Sell on Amazon',
    'Sell under Amazon Accelerator',
    'Protect and Build Your Brand',
    'Amazon Global Selling',
    'Become an Affiliate',
    'Fulfilment by Amazon',
    'Advertise Your Products',
    'Amazon Pay on Merchants',
  ];

  letUsHelpYou: string[] = [
    'COVID-19 and Amazon',
    'Your Account',
    'Returns Centre',
    '100% Purchase Protection',
    'Amazon App Download',
    'Amazon Assistant Download',
    'Help',
  ];

  countries: string[] = [
    'Australia',
    'Brazil',
    'Canada',
    'China',
    'France',
    'Germany',
    'Italy',
    'Japan',
    'Mexico',
    'Netherlands',
    'Poland',
    'Singapore',
    'Spain',
    'Turkey',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
  ];

  upperFooterContent: { [key: string]: string[] } = {
    'Get to Know Us': this.aboutUs,
    'Connect with Us': this.connectWithUs,
    'Make Money with Us': this.makeMoneyWithUs,
    'Let Us Help You': this.letUsHelpYou,
  };
  entries = Object.entries(this.upperFooterContent);
}
