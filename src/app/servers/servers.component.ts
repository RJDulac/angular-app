import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  	// selector: `.app-servers`,
  selector: 'app-servers',
  //   template: `
  // 	<app-server></app-server> 
   // <app-server></app-server>`,
   templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No sever was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  hideP = false;
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }
  onToggleDetails() {
    this.hideP = !this.hideP;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
