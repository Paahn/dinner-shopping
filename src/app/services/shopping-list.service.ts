import { Subject } from 'rxjs';
import { Ingredient } from "../models/ingredient.model";

export class ShoppingListService {
    public ingredientListModified = new Subject<Ingredient[]>();
    public startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 3)
    ];

    public getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientListModified.next(this.ingredients.slice());
    }

    public addIngredients(ingredients: Ingredient[]): void {
        this.ingredients.push(...ingredients);
        this.ingredientListModified.next(this.ingredients.slice());
    }
}
