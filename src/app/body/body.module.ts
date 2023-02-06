import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryBlockComponent } from './product-category-block/product-category-block.component';
import { BodyComponent } from './body.component';
import { MaterialModule } from '../material/material.module';
import { DealsComponent } from './deals/deals.component';



@NgModule({
  declarations: [
    ProductCategoryBlockComponent,BodyComponent, DealsComponent
  ],
  imports: [
    CommonModule,MaterialModule
  ],
  exports: [BodyComponent],
})
export class BodyModule { }