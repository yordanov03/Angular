import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({providedIn: 'root'})
export class DataStorage{
    constructor(private http: HttpClient, private recipeService: RecipeService){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://recipebook-5411a.firebaseio.com/recipes.json', recipes).subscribe((response)=>{console.log(response)})
    }

    fetchRecipes(){
        this.http.get<Recipe[]>('https://recipebook-5411a.firebaseio.com/recipes.json').subscribe(
            recipes=>{
                console.log(recipes)
                this.recipeService.setRecipes(recipes)
            }
            
        )
    }
}