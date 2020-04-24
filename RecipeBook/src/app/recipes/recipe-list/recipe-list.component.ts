import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [ new Recipe('A test recipe','This is simply a test', 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/mediterranean-hummus-couscous-bowls-9aa1b9c2.jpg'),
new Recipe ('Another test recipe', 'This is again only a test', 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/sizzlin-saigon-steak-bowls-55aa81ad.jpg')];
  
@Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){

    this.recipeWasSelected.emit(recipe);
  }
}
