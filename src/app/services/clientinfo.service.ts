import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, forkJoin, of } from 'rxjs';
import Bowser from 'bowser';

export interface ClientInfo {
  ip: string;
  timeZone: string;
  os: string;
  browser: string;
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
    return navigator.platform || 'Unknown OS';
  }
  private getBrowser(): string {
    const browser = Bowser.getParser(window.navigator.userAgent);
    const name = browser.getBrowserName(); // e.g., "Chrome", "Brave", "Edge", "Firefox", "Safari", "Opera", etc.
    // console.log(`Detected browser: ${name}`);
    return name || 'Unknown Browser';
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

  getClientInfo(): Observable<ClientInfo> {
    return forkJoin({
      ip: this.getPublicIP(),
      timeZone: of(this.getTimeZone()),
      os: of(this.getOS()),
      browser: of(this.getBrowser()),
    });
  }
}
