import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ParentRoutingModule } from './parent-routing.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { BodyModule } from '../body/body.module';

@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    ParentRoutingModule,
    HeaderModule,
    FooterModule,
    BodyModule,
  ],
})
export class ParentModule {}
