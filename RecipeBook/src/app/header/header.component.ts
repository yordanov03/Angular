import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 @Output() propertyClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClicked(){
    this.propertyClicked.emit('recipe');
  }

  onShoppingListClicked(){
    this.propertyClicked.emit('shoppingList');
  }
}
