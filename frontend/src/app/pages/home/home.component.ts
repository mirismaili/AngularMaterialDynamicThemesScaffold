// core
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
// config
import { APP } from '../../config';
// services
import { KojiService } from '../../services';
// interfaces
import { IKojiConfigMetadata, IKojiConfigGeneric } from '../../interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // texts content
  content: IKojiConfigGeneric = {};

  constructor(
    private kojiService: KojiService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    this.init();
  }

  init(): void {
    // sets page title
    this.titleService.setTitle(this.kojiService.getEditor('metadata').name || APP.defaults.metatags.title);
    // sets page metatags
    this.setMetaTags(this.kojiService.getEditor('metadata'));
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
        if (prop && prop.startsWith(APP.paths.home)) {
          this.content[prop] = textContent[prop];
        }
      });
    }
  }

  /**
   * Sets page metatags
   * @param meta IKojiConfigMetadata
   */
  private setMetaTags(meta: IKojiConfigMetadata): void {
    // metas
    this.metaService.updateTag({ name: 'title', content: meta.name || APP.defaults.metatags.title });
    this.metaService.updateTag({ name: 'description', content: meta.description || APP.defaults.metatags.description });
    // open graph/facebook
    this.metaService.updateTag({ property: 'og:title', content: meta.name || APP.defaults.metatags.title });
    this.metaService.updateTag({ property: 'og:description', content: meta.description || APP.defaults.metatags.description });
    this.metaService.updateTag({ property: 'og:image', content: meta.image || APP.defaults.metatags.image });
    this.metaService.updateTag({ property: 'og:url', content: meta.url || APP.defaults.metatags.url });
    // twitter
    this.metaService.updateTag({ property: 'twitter:title', content: meta.name || APP.defaults.metatags.title });
    this.metaService.updateTag({ property: 'twitter:description', content: meta.description || APP.defaults.metatags.description });
    this.metaService.updateTag({ property: 'twitter:image', content: meta.image || APP.defaults.metatags.image });
    this.metaService.updateTag({ property: 'twitter:url', content: meta.url || APP.defaults.metatags.url });
  }
}
