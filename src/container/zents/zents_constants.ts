export const SEND_FORMAT: Array<Object> = [{
    name: 'Excel',
    label: 'excel',
    checked: true
},
{
    name: 'PDF',
    label: 'pdf',
    checked: false
}]

export const NOT_FILLED_BY: Array<any> = [{
    name: 'By customers',
    label: 'By customers',
    checked: true
},
{
    name: 'By associate',
    label: 'By associate',
    checked: false
}];

export const TS_STATUS_LIST: Array<Object> = [{
    name: 'APPROVED',
    label: 'APPROVED',
    checked: true
},
{
    name: 'SUBMITTED',
    label: 'SUBMITTED',
    checked: false
}, {
    name: 'BOTH',
    label: 'BOTH',
    checked: false
}];

export const TS_TYPE_LIST: Array<Object> = [{
    name: 'ADDHRS/OT TIMESHEETS',
    label: 'AdditionalHr',
    checked: true
},
{
    name: 'NORMAL TIMESHEETS',
    label: 'Normal',
    checked: false
}, {
    name: 'BOTH',
    label: 'BOTH',
    checked: false
}];

export const SITE_LIST: Array<Object> = [{
    name: 'Onsite',
    label: 'onsite',
    checked: true
},
{
    name: 'Offshore',
    label: 'offshore',
    checked: false
}, {
    name: 'Both',
    label: 'both',
    checked: false
}];

export const TIMESHEET_STATUS: Array<Object> = [
    {
        title: 'Saved',
        subTitle: 'saved',
        approvalStatusId: '-1'
    },
    {
        title: 'Approved',
        subTitle: 'approved',
        approvalStatusId: '1'
    },
    {
        title: 'Submitted',
        subTitle: 'submitted',
        approvalStatusId: '2'
    },
    {
        title: 'Rejected',
        subTitle: 'rejected',
        approvalStatusId: '3'
    }
];
