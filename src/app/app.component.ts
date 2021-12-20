import { Component, OnInit } from '@angular/core';
import { SeoService } from './service/seo.service';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService, private seoService: SeoService) {}

  ngOnInit() {
    // Handle Dark / Light Theme
    this.themeService.theme();
    // Handle SEO
    this.seoService.seo();
  }
}
