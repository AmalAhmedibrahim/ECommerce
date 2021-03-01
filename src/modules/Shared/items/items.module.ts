import { RouterModule } from '@angular/router';
import { MediumItemComponent } from './medium-item/medium-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MediumItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MediumItemComponent]
})
export class ItemsModule { }
