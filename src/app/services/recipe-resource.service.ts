import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "./recipe.service";
import { environment } from '../../environments/environment.custom';
import { Recipe } from "../models/recipe.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RecipeResource {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  public createRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put(environment.MSAL.API_URL,
    recipes
    )
    .subscribe(response => {
      console.log(response)
    })
  }

  public getRecipes(): void {
    this.http.get<Recipe[]>(environment.MSAL.API_URL)
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        })
      }))
      .subscribe(recipes => {
        this.recipeService.setRecipes(recipes);
      })
  }
}
