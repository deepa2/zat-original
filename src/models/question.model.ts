//http://json2ts.com/


export interface listParams {
    role: string,
    start: number,
    end: number,
    status: string
}


export interface Status {
    statusCode: number;
    statusMessage: string;
}

export interface UserDetails {
    employeeId: string;
    employeeName: string;
    employeeProfilePic: string;
    raisedByName?: any;
    raisedById?: any;
}

export interface AttachmentList {
    attachmentId: number;
    attachmentURL: string;
    attachmentFileName: string;
    attachmentFileType: string;
}

export interface ResponseList {
    questionId: number;
    question: string;
    status: string;
    subStatus: string;
    questionRaiseDate: string;
    isAttachmentAvailable: string;
    answer?: any;
    answerType?: any;
    start: number;
    end: number;
    role?: any;
    type?: any;
    message?: any;
    activityDate?: any;
    userComment?: any;
    rate: number;
    userRate?: any;
    userDetails: UserDetails;
    attachmentList: AttachmentList[];
    isTransactionOnForAdmin: boolean;
    isTransactionOnForAssociate: boolean;
    isTransactionOnForHR: boolean;
}

export interface Details {
    type: string;
    totalResultCount: number;
    responseList: ResponseList[];
    questionDetails?: any;
}

export interface IQuestion {
    status: Status;
    details: Details;
    data?: any;
}





