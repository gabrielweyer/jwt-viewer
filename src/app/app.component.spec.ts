import { JwtService } from './../shared/jwt.service';
import { ClippyService } from './../shared/clippy.service';
import { FooterComponent } from './footer/footer.component';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';
import { inject, provideAppInitializer } from '@angular/core';
import { AppConfigService } from '../shared/app-config.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    TestBed.inject(HttpTestingController)
      .expectOne('./environment.json')
      .flush({ build: '20261115.1', commit: '0123456789abcdef' });
  });

  afterEach(() => {
    TestBed.inject(HttpTestingController).verify();
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('JWT Viewer');
  });
});
