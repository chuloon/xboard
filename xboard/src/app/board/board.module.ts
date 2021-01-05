import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FilterCardsPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    FilterCardsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class BoardModule { }
