import { Component, OnInit } from '@angular/core';
import { BrowserDetectorService } from './service/browser-detector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'browser-detect';
  browserName: string = '';
  openLink = 'https://www.instagram.com/';
  url =
    'intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end';
  constructor(private browserService: BrowserDetectorService) {}

  ngOnInit() {
    this.getBrowser();
  }

  getBrowser() {
    this.browserName = this.browserService.getBrowserName();

    this.browserService.isMobile() ? (this.openLink = this.url) : this.openLink;
  }
}
