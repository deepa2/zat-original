import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], ...args): any {

    if(!items) return []; 

    let key = args[0];
    let searchTerm = args[1];

    if (!searchTerm) return items;

    return items.filter(it => {
      return it[key].toLowerCase().includes(searchTerm.toLowerCase());
    });

  }
}
