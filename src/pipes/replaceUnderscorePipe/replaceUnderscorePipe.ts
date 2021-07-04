import { Pipe, PipeTransform } from '@angular/core';
/**
 * pipe for getting the pdf name using the substring function
 */
@Pipe({
    name: 'replaceUnderscorePipe'
})

export class ReplaceUnderscorePipe implements PipeTransform {
    transform(value: string): string {
        return value ? value.replace(/_/g, " ") : value;
    }
}