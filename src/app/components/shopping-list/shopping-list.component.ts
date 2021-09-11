import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  public ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  public onIngredientAdded(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

}
