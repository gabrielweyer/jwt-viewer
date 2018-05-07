import { AppConfigService } from './../../shared/app-config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  build: string;
  commit: string;

  constructor(private appConfig: AppConfigService) {
    this.build = appConfig.build;
    this.commit = appConfig.commit;
  }
}
