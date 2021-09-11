import { Recipe } from "../models/recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
        'Test recipe',
        'First recipe to test this out',
        'https://static.onecms.io/wp-content/uploads/sites/9/2018/03/recipetester-ft-0318.jpg'
        ),
        new Recipe(
          'A second recipe',
          'Second recipe to test this out',
          'https://static.onecms.io/wp-content/uploads/sites/9/2018/03/recipetester-ft-0318.jpg'
        )
    ];

    public getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

}