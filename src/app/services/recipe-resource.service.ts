import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeService } from "./recipe.service";
import { environment } from '../../environments/environment.custom';
import { Recipe } from "../models/recipe.model";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeResource {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  public createRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put(environment.MSAL.API_URL_RECIPES,
    recipes
    )
    .subscribe(response => {
      console.log(response)
    })
  }

  public getRecipes() {
    return this.authService.user
    .pipe(
      take(1),
      exhaustMap(user => {
        return this.http.get<Recipe[]>(
          environment.MSAL.API_URL_RECIPES,
          {
            params: new HttpParams().set('auth', user.token)
          }
        );
      }),
      map(recipes => {
        return recipes.map( recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          }
        })
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes)
      })
    )
  }
}
