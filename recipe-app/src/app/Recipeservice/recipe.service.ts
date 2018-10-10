import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipes';
import { MessageService } from '../messageService/message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private recipesUrl = 'https://brendero.cmsdevelopment.be/wp-json/wp/v2/rest_recipes';
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  getRecipes(): Observable<Recipe[]> {
    // TODO: send the message _after_ fetching the recipes
    return this.http.get<Recipe[]>(this.recipesUrl)
    .pipe(
      tap(recipes => this.log('fetched heroes')),
      catchError(this.handleError('getRecipes', []))
    );
  }

  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/${id}`;
    return this.http.get<Recipe>(url)
    .pipe(
      tap(_ => this.log(`Fetched Recipe id =${id}`)),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
    );
  }

  updateRecipe(recipe: Recipe): Observable<any> {
    return this.http.put(this.recipesUrl, recipe, httpOptions)
    .pipe(
      tap(_ => this.log(`updated recipe with id=${recipe.id}`)),
      catchError(this.handleError<any>('updateRecipe'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
