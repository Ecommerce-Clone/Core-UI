import { Component, OnInit } from '@angular/core';
import { BodyServiceService } from '../body-service.service';

@Component({
  selector: 'app-product-category-block',
  templateUrl: './product-category-block.component.html',
  styleUrls: ['./product-category-block.component.sass']
})
export class ProductCategoryBlockComponent implements OnInit {
  
  constructor(private bodyServiceService:BodyServiceService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.bodyServiceService.fetchProducts().subscribe((prods)=>{console.log(prods)})
  }

}
