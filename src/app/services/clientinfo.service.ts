import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, forkJoin, of } from 'rxjs';
import Bowser from 'bowser';

export interface ClientInfo {
  ip: string;
  timeZone: string;
  os: string;
  browser: string;
  resolution:any;
}

@Injectable({
  providedIn: 'root',
})
export class ClientinfoService {
  constructor(private http: HttpClient) {}

  private getPublicIP(): Observable<string> {
    return this.http
      .get<{ ip: string }>('https://api64.ipify.org?format=json')
      .pipe(map((res) => res.ip));
  }

  private getTimeZone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  private getOS(): string {
     if ((navigator as any).userAgentData?.platform) {
      return (navigator as any).userAgentData.platform;
    }
    return navigator.platform || 'Unknown';
  }
  private getBrowser(): string {
    const browser = Bowser.getParser(window.navigator.userAgent);
    const name = browser.getBrowserName(); 
    return name || 'Unknown Browser';
  }

    private getScreenResolution() {
    return `${window.screen.width}x${window.screen.height}`;
  }

  getClientInfo(): Observable<ClientInfo> {
    return forkJoin({
      ip: this.getPublicIP(),
      timeZone: of(this.getTimeZone()),
      os: of(this.getOS()),
      browser: of(this.getBrowser()),
      resolution:of(this.getScreenResolution())
    });
  }

    private getBrowserS(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Edg/')) {
      return 'Edge';
    } else if (userAgent.includes('Chrome')) {
      return 'Chrome';
    } else if (userAgent.includes('Firefox')) {
      return 'Firefox';
    } else if (userAgent.includes('Safari')) {
      return 'Safari';
    } else {
      return 'Unknown Browser';
    }
  }
}

// this below code is used to bypass the token for any API call in angular application 
// import { HttpClient, HttpBackend } from '@angular/common/http';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-your-component',
//   templateUrl: './your.component.html'
// })
// export class YourComponent {
//   private rawHttpClient: HttpClient;

//   constructor(private httpBackend: HttpBackend) {
//     // This HttpClient does NOT use interceptors
//     this.rawHttpClient = new HttpClient(httpBackend);
//   }

//   getPublicIP() {
//     this.rawHttpClient.get('https://api64.ipify.org/?format=json')
//       .subscribe(
//         res => console.log('IP API Response:', res),
//         err => console.error('Failed to get IP:', err)
//       );
//   }
// }

