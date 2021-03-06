import { Ingredient } from "./ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, descr: string, imageP: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = descr;
        this.imagePath = imageP;
        this.ingredients = ingredients;
    }
}