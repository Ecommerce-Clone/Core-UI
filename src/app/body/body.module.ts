import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryBlockComponent } from './product-category-block/product-category-block.component';
import { BodyComponent } from './body.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ProductCategoryBlockComponent,BodyComponent
  ],
  imports: [
    CommonModule,MaterialModule
  ],
  exports: [BodyComponent],
})
export class BodyModule { }