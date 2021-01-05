import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FilterCardsPipe } from './pipes/filter.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    HomeComponent,
    FilterCardsPipe
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    HomeComponent
  ]
})
export class BoardModule { }
