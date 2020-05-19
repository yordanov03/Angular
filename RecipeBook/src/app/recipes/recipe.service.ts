import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [ 
        new Recipe('A test recipe',
        'This is simply a test', 
        'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/mediterranean-hummus-couscous-bowls-9aa1b9c2.jpg',
        [new Ingredient('Meat', 1), new Ingredient('Herbs', 5)]),
        new Recipe ('Another test recipe', 
        'This is again only a test', 
        'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/sizzlin-saigon-steak-bowls-55aa81ad.jpg',
        [new Ingredient('Eggs', 5), new Ingredient('Mushrooms',10)])];

constructor(private shoppingListService: ShoppingListService){}

getRecipes(){
    return this.recipes.slice();
}

getRecipe(id: number){
    return this.recipes[id];
}

addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
}
}