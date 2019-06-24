// core
import { Directive, ElementRef, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// services
import { KojiService } from '../services';


@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: any,
    private render: Renderer2,
    private kojiService: KojiService
  ) {}

  ngOnInit() {
    this.setTheme();
  }

  /**
   * Initializes the App's styles setup
   */
  private setTheme() {
    this.addThemeStyles();
  }

  /**
   * Adds a font link to the App's head
   * @param font: String
   */
  private addFont(font: string): void {
    // create a new 'link' element
    const fontLinkElement = this.document.createElement('link') as HTMLLinkElement;
    fontLinkElement.rel = 'stylesheet';
    fontLinkElement.href = `https://fonts.googleapis.com/css?family=${font}`;
    // add it to DOM
    this.render.appendChild(this.document.head, fontLinkElement);
  }

  /**
   * Adds the the CSS variables to the DOM that sets the style
   */
  private addThemeStyles(): void {
    // get the theme content
    const theme = this.kojiService.getEditor('theme');
    const themeProps = Object.keys(theme);

    if (themeProps.length) {
      // css properties variables
      let cssPropertiesVars = '';

      // check every theme property that starts with '--'
      themeProps.map((prop) => {
        if (prop.substr(0, 2) === '--') {
          // for properties that sets the font-family
          if (prop === '--font-family') {
            this.addFont(theme[prop]);
          }
          // for properties that sets the background with an image (absolute path)
          if (prop.startsWith('--background') && theme[prop].indexOf('http') > -1) {
            theme[prop] = (`url(${theme[prop]})`).toString();
          }
          // add the style
          cssPropertiesVars += `${prop}: ${theme[prop]};`;
        }
      });

      if (cssPropertiesVars !== '') {
        // set the css variables to the DOM
        this.render.setProperty(this.document.documentElement, 'style', cssPropertiesVars);
      }
    }
  }
}
