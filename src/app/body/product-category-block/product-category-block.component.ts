import { Component, OnInit } from '@angular/core';
import { BodyServiceService } from '../body-service.service';

interface product {
  id : number;
  category_name : string;
  image_link : string;
}


@Component({
  selector: 'app-product-category-block',
  templateUrl: './product-category-block.component.html',
  styleUrls: ['./product-category-block.component.sass'],
})
export class ProductCategoryBlockComponent implements OnInit {
  
  constructor(private bodyServiceService:BodyServiceService) { }
  products : product[] = [];
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
     this.bodyServiceService.fetchProducts().subscribe((data:product[])=>{this.products = data});
  }

}
