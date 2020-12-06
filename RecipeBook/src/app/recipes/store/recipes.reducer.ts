import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipes.actions';

export interface State{
    recipes: Recipe[]
}

const initialState: State = {
    recipes:[]
}
export function recipeReducer (state = initialState, action: RecipeActions.RecipesActions){
    
    switch(action.type){
        case RecipeActions.SET_RECIPES:
            return{
                ...state,
                recipes:[...action.payload]
            }

        default: return state
    }
}