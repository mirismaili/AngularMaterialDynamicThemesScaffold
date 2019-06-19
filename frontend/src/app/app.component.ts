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
    console.log('Koji.config: ', Koji.config);
    Koji.pageLoad();
  }
}
