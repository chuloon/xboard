import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FilterCardsPipe } from './pipes/filter.pipe';
import { DragulaModule } from 'ng2-dragula';


@NgModule({
  declarations: [
    HomeComponent,
    FilterCardsPipe
  ],
  imports: [
    CommonModule,
    DragulaModule.forRoot()
  ],
  exports: [
    HomeComponent
  ]
})
export class BoardModule { }
