export class ClippyService {
  getClipboard(ev: ClipboardEvent): string {
    if (ev.clipboardData) {
      return ev.clipboardData.getData('text/plain');
    } else if (window['clipboardData']) {
      return window['clipboardData'].getData('Text');
    }
  }
}
