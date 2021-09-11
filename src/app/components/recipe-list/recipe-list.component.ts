import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() public recipeIsSelected = new EventEmitter<Recipe>();

  constructor() { }

  public ngOnInit(): void {
  }

  public onRecipeSelected(recipe: Recipe): void {
    this.recipeIsSelected.emit(recipe);
  }

}
