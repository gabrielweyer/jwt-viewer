import { ClippyService } from './../shared/clippy.service';
import { Component } from '@angular/core';
import { JwtService, Jwt } from '../shared/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jwt: Jwt;

  constructor(private readonly clippy: ClippyService, private readonly jwtService: JwtService) {}

  paste(ev: ClipboardEvent): void {
    this.jwt = null;
    const value = this.clippy.getClipboard(ev);
    this.jwt = this.jwtService.getJwt(value);
  }
}
