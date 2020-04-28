import { Recipe } from "./recipe.model";

export class RecipeService{
    private recipes: Recipe[] = [ new Recipe('A test recipe','This is simply a test', 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/mediterranean-hummus-couscous-bowls-9aa1b9c2.jpg'),
new Recipe ('Another test recipe', 'This is again only a test', 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/sizzlin-saigon-steak-bowls-55aa81ad.jpg')];

getRecipes(){
    return this.recipes.slice();
}
}