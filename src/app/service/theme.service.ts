import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // User Selected Color Scheme
  userColorScheme: 'dark' | 'light' | 'system' =
    localStorage.getItem('theme') === 'dark' ? 'dark' : localStorage.getItem('theme') === 'light' ? 'light' : 'system';

  // Get System Color Scheme
  systemColorScheme(): 'dark' | 'light' {
    if (this.userColorScheme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ||
        window.matchMedia('(prefers-color-scheme: no-preference)').matches
        ? 'dark'
        : 'light';
    } else {
      return this.userColorScheme;
    }
  }

  constructor(private overlayContainer: OverlayContainer) {}

  theme(): void {
    if (this.userColorScheme === 'light') {
      // HTML Element
      document.getElementsByTagName('html')[0].classList.remove('dark');
      document.getElementsByTagName('html')[0].classList.add('light');
      // Overlay Container for Modals / Popups BG
      this.overlayContainer.getContainerElement().classList.remove('dark');
      this.overlayContainer.getContainerElement().classList.add('light');
    } else {
      // HTML Element
      document.getElementsByTagName('html')[0].classList.add('dark');
      document.getElementsByTagName('html')[0].classList.remove('light');
      // Overlay Container for Modals / Popups BG
      this.overlayContainer.getContainerElement().classList.add('dark');
      this.overlayContainer.getContainerElement().classList.remove('light');
    }
  }
}
