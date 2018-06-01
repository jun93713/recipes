import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    //set as private so array cannot be access from outside
    private recipes: Recipe[] = [
        new Recipe('Beef Wellington', 'This is a recipe', 'https://cdn.vox-cdn.com/thumbor/Y3E0Q9Dr_' +
            'TqNCfZ08T-BOHhPXEg=/cdn.vox-cdn.com/uploads/chorus_asset/file/6695159/SwiftAndSons_beefwellington2.0.jpg',
            [
               new Ingredient('Flat cap mushrooms, roughly chopped', 400),
            ]),
        new Recipe('Another Test recipe', 'This is a recipe', 'http://gbc-cdn-public-media.azureedge.net/img11530.768x512.jpg',
            [

            ])
    ]; // This is the part we want to integrate backend to pick up recipes

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
       this.slService;
    }
}