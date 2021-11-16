import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { RecipeResource } from '../services/recipe-resource.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  public isAuthenticated: boolean = false;

  constructor(
    private recipeResource: RecipeResource,
    private authService: AuthService
  ) {}

  public ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe( user => {
      this.isAuthenticated = !user ? false : true;
    });
  }

  public onCreateRecipe(): void {
    this.recipeResource.createRecipes();
  }

  public onGetRecipes(): void {
    this.recipeResource.getRecipes().subscribe();
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
