import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'recipes', component: RecipesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: RecipeDetailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {
}
