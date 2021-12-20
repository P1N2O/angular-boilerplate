import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { metaData } from '../data/meta.data';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private title: Title,
    private meta: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  // Update Title
  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  // Update Description
  updateDescription(content: string) {
    this.meta.updateTag({ name: 'description', content });
  }

  // Update Canonical URL
  updateCanonical(url: string) {
    const link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    this.document.head.appendChild(link);
  }

  // Handle SEO
  seo() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child?.snapshot.data) {
            return child.snapshot.data;
          }
          // return { title: this.title.getTitle(), description: this.meta.getTag('name="description"')?.content };
          return metaData['default'];
        })
      )
      .subscribe((data: any) => {
        this.updateTitle(data.title);
        this.updateDescription(data.description);
        // this.updateCanonical(this.document.location.href);
        this.updateCanonical(environment.canonical + this.activatedRoute?.firstChild?.snapshot?.routeConfig?.path);
      });
  }
}
