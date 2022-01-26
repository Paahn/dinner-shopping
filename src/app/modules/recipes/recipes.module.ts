import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { FilterPipe } from "src/app/shared/pipes/filter.pipe";
import { RecipeDetailComponent } from "./components/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./components/recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./components/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./components/recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./components/recipe-start/recipe-start.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { RecipesRoutingModule } from "./recipes-routing.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent
    ],
    imports: [
        RouterModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {}