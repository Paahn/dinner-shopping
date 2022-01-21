import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/auth/auth.guard";
import { RecipeDetailComponent } from "./components/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./components/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./components/recipe-start/recipe-start.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { RecipesResolverService } from "./services/recipe-resolver.service";

const routes: Routes = [
    {   
        path: 'recipes',
        component: RecipesComponent,
        canActivate: [AuthGuard],
        children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent},
        { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
        { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}