import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  payload: string;

  paste(ev: ClipboardEvent): void {
    let value: string;

    if (ev.clipboardData) {
      value = ev.clipboardData.getData('text/plain');
    } else if (window['clipboardData']) {
      value = window['clipboardData'].getData('Text');
    }

    this.payload = '';

    const firstDotOffset = value.indexOf('.');
    const lastDotOffset = value.lastIndexOf('.');

    if (firstDotOffset === -1) { return; }

    const jwtPayloadBase64 = value.substring(firstDotOffset + 1, lastDotOffset);

    const jwtPayload = atob(jwtPayloadBase64);

    this.payload = JSON.stringify(JSON.parse(jwtPayload), null, 2);
  }
}
