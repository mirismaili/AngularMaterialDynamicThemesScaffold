// core
import { Component } from '@angular/core';
// rxjs
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// services
import { SampleService } from '../../services';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
  // message from api
  message: string;

  constructor(private sampleService: SampleService) { }

  /**
   * Requests a message from api
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
