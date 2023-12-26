import { enableProdMode, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { JwtService } from './shared/jwt.service';
import { ClippyService } from './shared/clippy.service';
import { AppConfigService } from './shared/app-config.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    AppConfigService,
    ClippyService,
    JwtService,
    { provide: APP_INITIALIZER, useFactory: (config: AppConfigService) => () => config.load(), deps: [AppConfigService], multi: true },
    provideHttpClient(withInterceptorsFromDi())
  ]
})
  .catch(err => console.error(err));
