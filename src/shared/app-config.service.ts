import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

interface Config {
  build: string;
  commit: string;
}

@Injectable()
export class AppConfigService {
  private readonly http = inject(HttpClient);

  build = '';
  commit = '';

  async load(): Promise<void> {
    const config = await firstValueFrom(this.http.get<Config>('./environment.json'));
    this.build = config.build;
    this.commit = config.commit;
  }
}
