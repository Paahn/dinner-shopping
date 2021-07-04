import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
    'Test recipe', 
    'First recipe to test this out', 
    'https://static.onecms.io/wp-content/uploads/sites/9/2018/03/recipetester-ft-0318.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
