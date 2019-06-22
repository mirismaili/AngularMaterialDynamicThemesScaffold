// core
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
// config
import { APP } from '../../config';
// services
import { KojiService } from '../../services';
// interfaces
import { IKojiConfigMetadata } from '../../interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
    this.titleService.setTitle(this.kojiService.getMetadata().name);
    // sets page metatags
    this.setMetaTags(this.kojiService.getMetadata());
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
