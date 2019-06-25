// core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// config
import { APP } from '../../config';
// services
import { KojiService } from '../../services';
// interfaces
import { IKojiConfigGeneric } from '../../interfaces';


@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  // redirection url
  path: string;
  // texts content
  content: IKojiConfigGeneric = {};

  constructor(
    private route: ActivatedRoute,
    private kojiService: KojiService
  ) { }

  ngOnInit() {
    // sets redirection url
    this.path = this.route.snapshot.data.path;
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
        if (prop && prop.startsWith(APP.paths.notfound)) {
          this.content[prop] = textContent[prop];
        }
      });
    }
  }
}
