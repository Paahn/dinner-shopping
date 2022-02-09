import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { RecipeResource } from '../modules/recipes/services/recipe-resource.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  public isAuthenticated: boolean = false;
  public fetchedRecipes: boolean = false;

  constructor(
    private recipeResource: RecipeResource,
    private authService: AuthService
  ) {}

  public ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe( user => {
      this.isAuthenticated = !!user;
    });
  }

  public onCreateRecipe(): void {
    this.recipeResource.createRecipes();
  }

  public onGetRecipes(): void {
    this.fetchedRecipes = true;
    this.recipeResource.getRecipes().subscribe();
  }

  public onLogout(): void {
    this.authService.signOut();
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
