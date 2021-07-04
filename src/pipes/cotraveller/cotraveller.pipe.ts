import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cotraveller',
})
export class CotravellerPipe implements PipeTransform
{

    transform(items: any[], ...args): any
    {

        if (!items) return [];

        let searchTerm = args[0];
        if (!searchTerm || searchTerm == 'All') return items;

        return items.filter(obj =>
        {
            switch (searchTerm)
            {
                case 'Approved':
                    return obj.isApproved;
                    break;
                case 'Rejected':
                    return obj.isRejected;
                    break;
                case 'Pending':
                    return obj.isPending;
                    break;
                case 'Cancelled':
                    return obj.isCancelled;
                    break;
            }
        });

    }
}
