import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperFooterComponent } from './upper-footer/upper-footer.component';
import { FooterComponent } from './footer.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [UpperFooterComponent, FooterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [UpperFooterComponent, FooterComponent],
})
export class FooterModule {}
