

export interface Status {
    statusCode: number;
    statusMessage: string;
}

export interface ConversationTypeMaster {
    conversationTypeId: number;
}

export interface User {
    emailId: string;
    firstName: string;
    middleName?: any;
    lastName: string;
    gender: string;
    parentBuName: string;
    buName: string;
    location: string;
    country: string;
    loginId: string;
    supervisorId: number;
    birthDate: string;
    joiningDate: string;
    jobTitle: string;
    band: string;
    rowAddStp: Date;
    rowUpdateStp: Date;
    rowAddUser: string;
    rowUpdateUser: string;
    activeStatus: number;
    sourceUserId?: any;
    previousExp?: any;
    bloodGroup?: any;
    city?: any;
    vbu: string;
    totalExp: number;
    skills?: any;
    awards?: any;
    training?: any;
    employeeId: number;
    employeeName: string;
    employeeProfilePic: string;
}

export interface ConversationTypeMaster2 {
    conversationTypeId: number;
}

export interface Attachment {
    multimediaId: number;
    user: User;
    conversationTypeMaster: ConversationTypeMaster2;
    multimediaUrl: string;
    fileName: string;
    fileType: string;
    filePath: string;
    rowAddStp: Date;
    rowUpdateStp: Date;
    rowAddUser: string;
    rowUpdateUser: string;
    activeStatus: number;
}

export interface ResponseList {
    announcementId: number;
    announcementText: string;
    announcementSubject: string;
    conversationTypeMaster: ConversationTypeMaster;
    userId: number;
    rowUpdateStp: Date;
    rowAddStp: Date;
    rowAddUser: string;
    rowUpdateUser: string;
    activeStatus: number;
    notification: string;
    likeCount: number;
    mode?: any;
    attachments: Attachment[];
    start: number;
    end: number;
    disLikeCount: number;
    commentCount: number;
    liked: boolean;
    disliked: boolean;
    commented: boolean;
}

export interface Details {
    type: string;
    totalResultCount: number;
    responseList: ResponseList[];
}

export interface IAnnouncement {
    status: Status;
    details: Details;
}



