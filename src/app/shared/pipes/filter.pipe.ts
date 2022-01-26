import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from 'src/app/modules/recipes/models/recipe.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Recipe[], filterValue: string, property: string): Recipe[] {
    if (filterValue === '') return value;

    const filterVal = filterValue.toLowerCase();
    const filterArray = [];
      for (const item of value) {
        if (item[property].toLowerCase().includes(filterVal)) {
          filterArray.push(item);
        }
      }
    return filterArray;
  }
}
