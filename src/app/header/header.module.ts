import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HeaderComponent } from './header.component';
import LowerHeaderComponent from './lower-header/lower-header.component';
import { MaterialModule } from '../material/material.module';

import { BodyModule } from '../body/body.module';

@NgModule({
  declarations: [TopHeaderComponent, HeaderComponent, LowerHeaderComponent],
  imports: [CommonModule, MaterialModule, BodyModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
