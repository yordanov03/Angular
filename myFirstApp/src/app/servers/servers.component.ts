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
  serverWasCreated = false;
  servers = ['TestServer1', 'TestServer2'];
  displayPassword = false;
  currentNumber: number = 0
  allClicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreationServer(){
    this.serverCreationStatus = 'Server was created! Server name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverWasCreated = true;
  }

  onUpdateServerName(evenet: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onButtonClick(){
    this.displayPassword = ! this.displayPassword;
    this.allClicks.push(this.currentNumber+1);
    this.currentNumber++;
  }

  getBGColor(){
    if(this.currentNumber>=5){
      return 'blue'
    }
    else{
      return 'white'
    }
  }


}
