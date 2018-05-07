import { Injectable } from '@angular/core';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

interface Config {
  build: string;
  commit: string;
}

@Injectable()
export class AppConfigService {
  build: string;
  commit: string;

  constructor(private readonly http: HttpClient) {}

  public load(): Promise<{}> {
    return new Promise((resolve, reject) => {
      this.http
        .get<Config>('./environment.json')
        .pipe(catchError(this.handleError))
        .subscribe(config => {
          this.build = config.build;
          this.commit = config.commit;
          resolve(true);
        });
    });
  }

  private handleError(error: HttpErrorResponse): ErrorObservable {
    let errorMessage = 'Error when reading the configuration file: ';

    if (error.error.error instanceof SyntaxError) {
      errorMessage += 'malformed JSON';
    } else if (error.status === 404) {
      errorMessage += 'file not found';
    } else {
      errorMessage += 'other error';
    }

    errorMessage += ' - ' + JSON.stringify(error);

    return new ErrorObservable(errorMessage);
  }
}
