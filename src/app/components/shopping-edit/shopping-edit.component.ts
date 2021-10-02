import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public editMode: boolean = false;
  public editedIngredientIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  public ngOnInit(): void {
    const subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedIngredientIndex = index;
        }
      );
  }

  public onAddIngredient(myForm: NgForm) {
    const value = myForm.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
