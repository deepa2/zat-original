import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SortJobsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'sortJobs',
})
export class SortJobsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(jobs: any, searchText: any): any {
    if (searchText == null || searchText == '') {
      return jobs;
    } else {
      return jobs.filter(function (obj) {
        if(obj.userName){
          return obj.userName.toLowerCase().indexOf(searchText.toLowerCase()) != -1;
        }else{
          return obj.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) != -1;
        }
        
      });
    }
  }
}
