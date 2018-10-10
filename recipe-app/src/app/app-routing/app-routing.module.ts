import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'recepten', component: RecipesComponent},
  {path: 'recept/:id', component: RecipeDetailComponent},
  {path: '', redirectTo: '/recepten', pathMatch: 'full' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {
}
