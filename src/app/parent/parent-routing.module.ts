import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent.component';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('../body/body.module').then((m) => m.BodyModule),
    component: ParentComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentRoutingModule {}
