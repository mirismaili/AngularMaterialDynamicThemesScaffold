// core
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// pages
import { NotfoundComponent } from './notfound.component';


@NgModule({
  declarations: [NotfoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: NotfoundComponent }
    ])
  ]
})
export class NotfoundModule { }
