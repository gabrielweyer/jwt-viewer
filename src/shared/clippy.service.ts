import { Injectable } from '@angular/core';

@Injectable()
export class ClippyService {
  getClipboard(ev: ClipboardEvent): string {
    if (ev.clipboardData) {
      return ev.clipboardData.getData('text/plain');
    }

    return '';
  }
}
