import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "./recipe.service";
import { environment } from '../../../../environments/environment.custom';
import { Recipe } from "../models/recipe.model";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RecipeResource {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) {}

  public createRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put(environment.MSAL.API_URL_RECIPES,
    recipes
    ).subscribe()
  }

  public getRecipes() {
    return this.http.get<Recipe[]>(
      environment.MSAL.API_URL_RECIPES
    )
    .pipe(
      map(recipes => recipes
        ? recipes.map(recipe => ({ ingredients: [], ...recipe }))
        : []
      ),
      tap(recipes => {
        this.recipeService.setRecipes(recipes)
      })
    )
  }
}
