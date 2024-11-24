import { JwtService } from './../shared/jwt.service';
import { ClippyService } from './../shared/clippy.service';
import { FooterComponent } from './footer/footer.component';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';
import { inject, provideAppInitializer } from '@angular/core';
import { AppConfigService } from '../shared/app-config.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [LinkComponent,
        FooterComponent,
        AppComponent],
    providers: [
        AppConfigService,
        ClippyService,
        JwtService,
        provideAppInitializer(() => {
          const config = inject(AppConfigService);
          return config.load();
        }),
        provideHttpClient(withInterceptorsFromDi())
    ]
}).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('JWT Viewer');
  }));
});
