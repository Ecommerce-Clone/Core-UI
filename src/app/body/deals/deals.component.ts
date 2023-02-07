import { Component, OnInit } from '@angular/core';
import { BodyService } from '../body-service.service';
import { Category } from '../product.interface';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.sass'],
})
export class DealsComponent implements OnInit {
  categories: Category[] = [];
  constructor(private bodyService: BodyService) {}
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.bodyService
      .fetchData('categories.json')
      .subscribe((data: Category[]) => {
        this.categories = data;
      });
  }
}
