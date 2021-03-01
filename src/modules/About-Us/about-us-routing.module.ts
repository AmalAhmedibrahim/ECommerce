import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUSComponent } from './components/about-us/about-us.component';


const routes: Routes = [
  { path: '', component: AboutUSComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
