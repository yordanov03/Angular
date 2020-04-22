import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentHTML', {static: true}) serverContentHTML: ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameHTML:HTMLInputElement) {
   this.serverCreated.emit({serverName: serverNameHTML.value, serverContent: this.serverContentHTML.nativeElement.value})
  }

//   onAddBlueprint(serverNameHTML:HTMLInputElement) {
//     this.blueprintCreated.emit({serverName: serverNameHTML.value, serverContent: this.newServerContent})
// }
}
