import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus: string = 'No server was created!'
  serverName: string = ''

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreationServer(){
    this.serverCreationStatus = 'Server was created! Server name is' + this.serverName
  }

  onUpdateServerName(evenet: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
