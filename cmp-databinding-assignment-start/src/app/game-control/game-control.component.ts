import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() outputNumber = new EventEmitter<number>();
  interval;
  currentNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

startCount(){
  this.interval = setInterval(()=>{this.outputNumber.emit(this.currentNumber++)},1000);

}

stopCount(){
  clearInterval(this.interval);
}
}
