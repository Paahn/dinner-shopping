import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "./recipe.service";
import { environment } from '../../environments/environment.custom';

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
}
