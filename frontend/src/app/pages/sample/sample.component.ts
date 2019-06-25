// core
import { Component, OnInit } from '@angular/core';
// rxjs
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// config
import { APP } from '../../config';
// services
import { SampleService, KojiService } from '../../services';
// interfaces
import { IKojiConfigGeneric } from '../../interfaces';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  // message from api
  message$: Observable<string>;
  // texts content
  content: IKojiConfigGeneric = {};

  constructor(
    private sampleService: SampleService,
    private kojiService: KojiService
  ) { }

  ngOnInit(): void {
    // sets page content
    this.setTextContent(this.kojiService.getEditor('texts'));
  }

  /**
   * Requests a message from api
   * @returns void
   */
  getMessageFromApi(): void {
    this.message$ = this.sampleService.getData().pipe(
      map((data) => data.message || null),
      catchError(error => throwError(error))
    );
  }

  /**
   * Sets page texts content
   * @param textContent IKojiConfigGeneric
   */
  private setTextContent(textContent: IKojiConfigGeneric): void {
    const contentProps = Object.keys(textContent);

    if (contentProps.length) {
      // set every related text for the veiw management
      contentProps.map((prop) => {
        // filter for page
        if (prop && prop.startsWith(APP.paths.sample)) {
          this.content[prop] = textContent[prop];
        }
      });
    }
  }
}
