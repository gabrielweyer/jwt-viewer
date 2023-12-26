import { JwtService } from './../shared/jwt.service';
import { ClippyService } from './../shared/clippy.service';
import { FooterComponent } from './footer/footer.component';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfigService } from '../shared/app-config.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      LinkComponent,
      FooterComponent,
      AppComponent
    ],
    providers: [
      AppConfigService,
      ClippyService,
      JwtService,
      { provide: APP_INITIALIZER, useFactory: (config: AppConfigService) => () => config.load(), deps: [AppConfigService], multi: true }
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
