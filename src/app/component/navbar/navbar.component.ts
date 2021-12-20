import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public themeService: ThemeService) {
    //
  }

  ngOnInit(): void {
    //
  }

  // On Theme Selection Change
  userColorSchemeChange(value: 'dark' | 'light' | 'system') {
    localStorage.setItem('theme', value);
    this.themeService.userColorScheme = value;
    this.themeService.theme();
  }
}
