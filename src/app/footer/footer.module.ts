import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperFooterComponent } from './upper-footer/upper-footer.component';
import { FooterComponent } from './footer.component';
import { MaterialModule } from '../material/material.module';
import { LowerFooterComponent } from './lower-footer/lower-footer.component';

@NgModule({
  declarations: [UpperFooterComponent, FooterComponent, LowerFooterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FooterComponent],
})
export class FooterModule {}
