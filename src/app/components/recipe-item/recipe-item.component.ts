import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;
  @Output() public recipeSelected = new EventEmitter<void>();

  constructor() { }

  public ngOnInit(): void {
  }

  public onSelected(): void {
    this.recipeSelected.emit();
  }

}
