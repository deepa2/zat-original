import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ToogleLessMorePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'toogleLessMore',
})
export class ToogleLessMorePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string,togglePipe:boolean,limit:number):string {
    //return value.toLowerCase();
    if(value.length > limit && togglePipe){
      return value.substring(0,limit)+'...'
    }else{
      return value;
    }
    
  }
}
