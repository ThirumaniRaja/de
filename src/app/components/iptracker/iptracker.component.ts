
import { Component, OnInit } from '@angular/core';
import { ClientInfo, ClientinfoService } from 'src/app/services/clientinfo.service';
import { IptrackerService } from 'src/app/services/iptracker.service';

@Component({
  selector: 'app-iptracker',
  templateUrl: './iptracker.component.html',
  styleUrls: ['./iptracker.component.scss']
})
export class IptrackerComponent implements OnInit {
  ip = '';
  clientInfo: ClientInfo | null = null;

  constructor(private ipService: IptrackerService, private clientInfo$ : ClientinfoService) {}

  ngOnInit() {
    

    this.clientInfo$.getClientInfo().subscribe((info)=>{
      this.clientInfo = info
      console.log(info)
    })

    // this.ipService.getPublicIp().subscribe((data) => {
    //   console.log('Your IP:', data);
    //   this.ip = data.ip;

    // });
  }
}

