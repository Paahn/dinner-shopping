import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesModule } from './modules/recipes/recipes.module';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes',
    loadChildren: ():Promise<RecipesModule> =>
      import('src/app/modules/recipes/recipes.module').then(m => m.RecipesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
