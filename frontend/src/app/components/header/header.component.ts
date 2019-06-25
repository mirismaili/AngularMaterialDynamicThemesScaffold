// core
import { Component, OnInit } from '@angular/core';
// services
import { KojiService } from '../../services';
// interfaces
import { IKojiConfigGeneric } from '../../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // texts content
  content: IKojiConfigGeneric = {};

  constructor(private kojiService: KojiService) { }

  ngOnInit() {
    // sets page content
    this.setTextContent(this.kojiService.getEditor('texts'));
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
        if (prop && prop.startsWith('header')) {
          this.content[prop] = textContent[prop];
        }
      });
    }
  }
}
