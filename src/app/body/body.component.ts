import { Component, OnInit } from '@angular/core';
// import postJson from 'src/assets/product.json';

// interface post {
//   id : number;
//   category_name : string;
//   image_link : string;

// }

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {
  // posts : post[]  = postJson;
  constructor() { }

  ngOnInit(): void {
  }
}
