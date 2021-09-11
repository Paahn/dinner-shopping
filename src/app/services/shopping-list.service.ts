import { Ingredient } from "../models/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 3)
    ];

    public getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }
}