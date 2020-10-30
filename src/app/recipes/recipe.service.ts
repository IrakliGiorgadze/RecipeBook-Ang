import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe("A Test Recipe", "Test Description", "https://i.pinimg.com/564x/44/c1/11/44c111473339e98604cf5c3b0c37d5f0.jpg", [
            new Ingredient("Meat", 1),
            new Ingredient("French Fries", 9),
        ]),
        new Recipe("Another Test Recipe", "Test Description", "https://i.pinimg.com/564x/44/c1/11/44c111473339e98604cf5c3b0c37d5f0.jpg", [
            new Ingredient("Meat", 1),
            new Ingredient("French Fries", 9),
        ]),
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}