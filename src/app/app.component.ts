import { ClippyService } from './../shared/clippy.service';
import { Component } from '@angular/core';
import { JwtService, Jwt } from '../shared/jwt.service';
import { FooterComponent } from './footer/footer.component';
import { NgIf, JsonPipe } from '@angular/common';
import { LinkComponent } from './link/link.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [LinkComponent, NgIf, FooterComponent, JsonPipe]
})
export class AppComponent {
  jwt: Jwt | undefined;
  decodedBase64 = '';

  constructor(private readonly clippy: ClippyService, private readonly jwtService: JwtService) {}

  pasteJwt(ev: ClipboardEvent): void {
    this.jwt = undefined;
    this.decodedBase64 = '';

    const value = this.clippy.getClipboard(ev);
    this.jwt = this.jwtService.getJwt(value);
  }

  pasteBase64(ev: ClipboardEvent): void {
    this.decodedBase64 = '';

    const value = this.clippy.getClipboard(ev);
    this.decodedBase64 = atob(value);
  }
}
