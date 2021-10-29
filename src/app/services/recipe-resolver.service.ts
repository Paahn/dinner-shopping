import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "../models/recipe.model";
import { RecipeResource } from "./recipe-resource.service";

@Injectable({ providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(private recipeResource: RecipeResource) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.recipeResource.getRecipes();
  }
}
