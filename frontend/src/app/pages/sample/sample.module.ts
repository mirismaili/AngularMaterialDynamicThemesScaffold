// core
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// pages
import { SampleComponent } from './sample.component';
// services
import { SampleService } from '../../services';


@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: SampleComponent }
    ])
  ],
  providers: [
    SampleService
  ],
})
export class SampleModule { }
