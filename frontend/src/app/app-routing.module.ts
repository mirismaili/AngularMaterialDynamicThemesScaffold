  // tslint:disable:max-line-length
// core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// config
import { APP } from './config';
// pages
import { HomeComponent } from './pages';


// routes (use lazy load when needed)
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: APP.paths.sample,
    loadChildren: () => import('./pages/sample/sample.module').then(({ SampleModule }) => SampleModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then(({ NotfoundModule }) => NotfoundModule),
    data: { path: '/' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
