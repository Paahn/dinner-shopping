import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) public nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) public amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  public ngOnInit(): void {
  }

  public onAddItem() {
    const newIngredientName = this.nameInputRef.nativeElement.value;
    const newIngredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(newIngredientName, newIngredientAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
