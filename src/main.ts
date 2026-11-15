import { inject, provideAppInitializer } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { JwtService } from './shared/jwt.service';
import { ClippyService } from './shared/clippy.service';
import { AppConfigService } from './shared/app-config.service';

bootstrapApplication(AppComponent, {
  providers: [
    AppConfigService,
    ClippyService,
    JwtService,
    provideAppInitializer(() => {
      const config = inject(AppConfigService);
      return config.load();
    }),
    provideHttpClient()
  ]
})
  .catch(err => console.error(err));
