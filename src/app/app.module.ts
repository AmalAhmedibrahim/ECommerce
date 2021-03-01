import { HeaderModule } from './layout/header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from 'src/modules/Shared/services/config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService],
      useFactory: (appConfigService: ConfigService) => () => appConfigService.load()
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
