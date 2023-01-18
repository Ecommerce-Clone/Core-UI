import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './header.component';
import { LowerHeaderComponent } from './lower-header/lower-header.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [TopHeaderComponent, HeaderComponent, LowerHeaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
