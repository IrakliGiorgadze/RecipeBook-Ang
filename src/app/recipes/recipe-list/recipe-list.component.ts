import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "Test Description", "https://i.pinimg.com/564x/44/c1/11/44c111473339e98604cf5c3b0c37d5f0.jpg"),
    new Recipe("Another Test Recipe", "Test Description", "https://i.pinimg.com/564x/44/c1/11/44c111473339e98604cf5c3b0c37d5f0.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
