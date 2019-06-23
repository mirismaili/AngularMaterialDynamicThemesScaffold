// core
import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
// packages
import Koji from 'koji-tools';
// animations
import { routeAnimations } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {

  constructor() {
    Koji.pageLoad();
  }

  /**
   * Returns the the current active route to control the animation to apply
   * @param outlet: RouterOutlet
   * @returns: ActivatedRoute
   */
  prepareRoute(outlet: RouterOutlet): ActivatedRoute {
    return outlet && outlet.isActivated && outlet.activatedRoute;
  }
}
