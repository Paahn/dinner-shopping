import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) public nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) public amountInputRef: ElementRef;
  @Output() public ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  public ngOnInit(): void {
  }

  public onAddItem() {
    const newIngredientName = this.nameInputRef.nativeElement.value;
    const newIngredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(newIngredientName, newIngredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
