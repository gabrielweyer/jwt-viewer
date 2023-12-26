import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'betterJson',
    standalone: true
})
export class BetterJsonPipe implements PipeTransform {
  transform(value: string): string {
    return JSON.stringify(JSON.parse(value), null, 2);
  }
}
