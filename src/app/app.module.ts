import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';
import { FooterComponent } from './footer/footer.component';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfigService } from './../shared/app-config.service';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppConfigService,
    { provide: APP_INITIALIZER, useFactory: (config: AppConfigService) => () => config.load(), deps: [AppConfigService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
