import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'], 
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {
  @Output() public recipeIsSelected = new EventEmitter<Recipe>();
  public recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  public ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  public onRecipeSelected(recipe: Recipe): void {
    this.recipeIsSelected.emit(recipe);
  }

}
