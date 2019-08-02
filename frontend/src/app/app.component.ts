// core
import {Component, HostBinding} from '@angular/core';
import {RouterOutlet, ActivatedRoute} from '@angular/router';
import {OverlayContainer} from '@angular/cdk/overlay'

// packages
import Koji from 'koji-tools';
// animations
import {routeAnimations} from './animations';

const THEME_DARKNESS_SUFFIX = `-dark`

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
  @HostBinding('class') activeThemeCssClass: string
  isThemeDark = false
  activeTheme: string
  
  constructor(private overlayContainer: OverlayContainer) {
    Koji.pageLoad();
    
    // Set default theme here:
    this.setActiveTheme('deeppurple-amber', /* darkness: */ false)
  }
  
  setActiveTheme(theme: string, darkness: boolean = null) {
    if (darkness === null)
      darkness = this.isThemeDark
    else if (this.isThemeDark === darkness) {
      if (this.activeTheme === theme) return
    } else
      this.isThemeDark = darkness
    
    this.activeTheme = theme
    
    const cssClass = darkness === true ? theme + THEME_DARKNESS_SUFFIX : theme
    
    const classList = this.overlayContainer.getContainerElement().classList
    if (classList.contains(this.activeThemeCssClass))
      classList.replace(this.activeThemeCssClass, cssClass)
    else
      classList.add(cssClass)
    
    this.activeThemeCssClass = cssClass
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
