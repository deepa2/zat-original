
export interface faqState {
    data: any,
    pending: boolean,
    error: any,
    detailData: any,
}

export interface Status {
    statusCode: number;
    statusMessage: string;
}

export interface Detail {
    departmentId: number;
    departmentName: string;
    question?: any;
    answer?: any;
    count?: any;
    icon: string;
}

export interface IFaq {
    status: Status;
    details: Detail[];
}



