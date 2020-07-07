import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{

recipesChanged= new Subject<Recipe[]>();

    // private recipes: Recipe[] = [ 
    //     new Recipe('A test recipe',
    //     'This is simply a test', 
    //     'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/mediterranean-hummus-couscous-bowls-9aa1b9c2.jpg',
    //     [new Ingredient('Meat', 1), new Ingredient('Herbs', 5)]),
    //     new Recipe ('Another test recipe', 
    //     'This is again only a test', 
    //     'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/sizzlin-saigon-steak-bowls-55aa81ad.jpg',
    //     [new Ingredient('Eggs', 5), new Ingredient('Mushrooms',10)])];

private recipes: Recipe[] = [];

constructor(private shoppingListService: ShoppingListService){}

setRecipes(recipes: Recipe[]){
    this.recipes = recipes
    this.recipesChanged.next(this.recipes.slice());
}

getRecipes(){
    return this.recipes.slice();
}

getRecipe(id: number){
    return this.recipes[id];
}

addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
}

addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
}

updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index]=newRecipe;
    this.recipesChanged.next(this.recipes.slice());
}

deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice())
}
}