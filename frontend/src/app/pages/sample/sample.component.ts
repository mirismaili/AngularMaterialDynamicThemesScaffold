// core
import { Component } from '@angular/core';
// rxjs
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// config
import { APP } from '../../config';
// services
import { SampleService } from '../../services';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
  // message from server
  message: string;

  constructor(private sampleService: SampleService) { }

  /**
   * Requests a message from server
   * @returns void
   */
  getMessageFromServer(): void {
    this.sampleService.getData().pipe(
      catchError(error => throwError(error))
    )
    .subscribe(({message}) => {
      this.message = message || null;
    });
  }
}
