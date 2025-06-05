
import { Component, OnInit } from '@angular/core';
import { IptrackerService } from 'src/app/services/iptracker.service';

@Component({
  selector: 'app-iptracker',
  templateUrl: './iptracker.component.html',
  styleUrls: ['./iptracker.component.scss']
})
export class IptrackerComponent implements OnInit {
  ip = '';

  constructor(private ipService: IptrackerService) {}

  ngOnInit() {
    this.ipService.getPublicIp().subscribe((data) => {
      console.log('Your IP:', data);
      this.ip = data.ip;

    });
  }
}

