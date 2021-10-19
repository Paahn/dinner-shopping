import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Recipe[], filterValue: string, property: string): Recipe[] {
    if (filterValue === '') return value;

    const filterArray = [];
      for (const item of value) {
        if (item[property] === filterValue) {
          filterArray.push(item);
        }
      }
    return filterArray;
  }
}
