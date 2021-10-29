import { Component } from '@angular/core';
import { RecipeResource } from '../services/recipe-resource.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    private recipeResource: RecipeResource
  ) {}
  public onCreateRecipe(): void {
    this.recipeResource.createRecipes();
  }
}
