import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenNumbers:number[] = [];
  oddNumbers: number[] = [];

onNumberEmitted(emitNumber: number){

  console.log(emitNumber);
  if(emitNumber%2===0){
    this.evenNumbers.push(emitNumber);
  }

  else{
    this.oddNumbers.push(emitNumber);
  }
}
}
