import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'json' })
export class JsonPipe implements PipeTransform {
  transform(value: string): string {
    return JSON.stringify(JSON.parse(value), null, 2);
  }
}
