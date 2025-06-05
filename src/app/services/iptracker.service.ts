import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IptrackerService {

  constructor(private http: HttpClient) {}

  getPublicIp() {
    return this.http.get<any>('https://api.ipify.org?format=json');
  }
}
