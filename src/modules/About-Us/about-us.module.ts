
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUSComponent } from './components/about-us/about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module';



@NgModule({
  declarations: [AboutUSComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
