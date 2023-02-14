import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./parent/parent.module').then((m) => m.ParentModule),
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('./user-reg/user-reg.module').then((m) => m.UserRegModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
