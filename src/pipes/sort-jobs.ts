import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SortPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {

  /**
   * Takes a value and makes it lowercase.
   */
  transform(list: any, args: any[]): any {

    let searchText: string = args[0]
    let key1: any = args[1]

    if (searchText == null || searchText == '') {
      return list;
    } else {
      return list.filter(function (obj) {
        if (obj[key1]) {
          return obj[key1].toLowerCase().indexOf(searchText.toLowerCase()) != -1;
        } else {
          return obj[key1].toLowerCase().indexOf(searchText.toLowerCase()) != -1;
        }
      });
    }
  }
}
