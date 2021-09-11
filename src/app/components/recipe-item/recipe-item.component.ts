import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  public ngOnInit(): void {
  }

  public onSelected(): void {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
