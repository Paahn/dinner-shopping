import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../models/ingredient.model";
import { Recipe } from "../models/recipe.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {
  public recipeListModified = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
      new Recipe(
      'Tzatziki',
      'Homemade tzatziki',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2014%2F02%2F21%2F2014-r-xl-cucumber-dill-tzatziki.jpg',
      [
          new Ingredient('Greek Yogurt', 1),
          new Ingredient('Cucumber', 1),
          new Ingredient('Dill weed', 1)
      ]
      ),
      new Recipe(
        'Souvlaki',
        'Delicious chicken skewers',
        'https://www.mygreekdish.com/wp-content/uploads/2013/05/Greek-Chicken-Souvlaki-Skewers-recipe-5-1536x1111.jpg',
        [
            new Ingredient('Chicken Breast', 2),
            new Ingredient('Lemon', 1),
            new Ingredient('Oregano', 1)
        ]
      )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  public setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipeListModified.next(this.recipes.slice());
  }

  public getRecipes(): Recipe[] {
      return this.recipes.slice();
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
  }

  public getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  public addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipeListModified.next(this.recipes.slice());
  }

  public updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipeListModified.next(this.recipes.slice());
  }

  public deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipeListModified.next(this.recipes.slice());
  }

}
