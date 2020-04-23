import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipeClicked:boolean = false;


  onPropertyClicked(property: string){
    property=='recipe'? this.recipeClicked= true : this.recipeClicked = false;
  }
}
