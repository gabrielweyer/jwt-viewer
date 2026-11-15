import { ClippyService } from './../shared/clippy.service';
import { Component, inject, signal } from '@angular/core';
import { JwtService, Jwt } from '../shared/jwt.service';
import { FooterComponent } from './footer/footer.component';

import { LinkComponent } from './link/link.component';
import { BetterJsonPipe } from '../shared/better-json.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [LinkComponent, FooterComponent, BetterJsonPipe]
})
export class AppComponent {
  private readonly clippy = inject(ClippyService);
  private readonly jwtService = inject(JwtService);

  readonly jwt = signal<Jwt | undefined>(undefined);
  readonly decodedBase64 = signal('');

  pasteJwt(ev: ClipboardEvent): void {
    this.jwt.set(undefined);
    this.decodedBase64.set('');

    const value = this.clippy.getClipboard(ev);
    this.jwt.set(this.jwtService.getJwt(value));
  }

  pasteBase64(ev: ClipboardEvent): void {
    this.decodedBase64.set('');

    const value = this.clippy.getClipboard(ev);
    this.decodedBase64.set(atob(value));
  }
}
