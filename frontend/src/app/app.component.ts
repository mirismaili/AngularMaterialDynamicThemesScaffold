// core
import { Component } from '@angular/core';
// packages
import Koji from 'koji-tools';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    Koji.pageLoad();
    // tslint:disable-next-line:no-string-literal
    window['Koji'] = Koji;
    console.log('Koji.config: ', Koji.config);
    console.log('global: ', global);
    console.log('process: ', process);
  }
}
