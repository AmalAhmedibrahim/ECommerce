import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperHeaderComponent } from './components/upper-header/upper-header.component';
import { HeaderComponent } from './header.component';
import { WelcomeControlComponent } from './components/welcome-control/welcome-control.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { RouterModule } from '@angular/router';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';

@NgModule({
  declarations: [HeaderComponent, UpperHeaderComponent, WelcomeControlComponent, MainMenuComponent, LanguageSwitcherComponent, ShoppingCardComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
