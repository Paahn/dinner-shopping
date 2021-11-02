import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "../models/recipe.model";
import { RecipeResource } from "./recipe-resource.service";
import { RecipeService } from "./recipe.service";

@Injectable({ providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private recipeResource: RecipeResource,
    private recipeServoce: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeServoce.getRecipes();
    if (recipes.length === 0) {
      return this.recipeResource.getRecipes();
    } else {
      return recipes;
    }
  }
}
