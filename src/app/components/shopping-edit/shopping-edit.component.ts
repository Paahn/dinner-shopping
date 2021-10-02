import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('myForm', { static: false }) shoppingListForm: NgForm;
  public subscription: Subscription;
  public editMode: boolean = false;
  public editedIngredientIndex: number;
  public editedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  public ngOnInit(): void {
    const subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedIngredientIndex = index;
          this.editedIngredient = this.shoppingListService.getIngredient(index);
          this.shoppingListForm.setValue({
            name: this.editedIngredient.name,
            amount: this.editedIngredient.amount
          })
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
