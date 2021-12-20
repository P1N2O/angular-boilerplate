import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { metaData } from './data/meta.data';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  // Home / Default Route
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: metaData['default'],
  },

  // Example Route 1
  // {
  //   path: '1',
  //   component: testComponent,
  //   data: metaData['test'],
  // },

  // Example Redirect Rule from a to b
  // { path: 'a', redirectTo: '/b' },

  // Redirect 404's to root
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
