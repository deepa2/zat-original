export class FormBase<T> {
    value: any;
    key: string;
    label: string;
    isRequired: boolean;
    order: number;
    controlType: string;
    titleValue: any;
    title:string;
    bindWith:any;
    isShow:boolean;
    isChildRequired:boolean;
    isEditable:boolean;
    toolTipMsg:string;
    isAvailableForFinalSubmit:boolean;
    isAvailableForSubmit:boolean;
    docType:any;

    child:any;
    fieldType:any;
    adminStatus: string;
    adminStatusbkp: string;
    changerequesttypeid: number;
    filePath: string;
    hasRequested: boolean;
    legal_agreement: string;
    lov: Array<any> = [];
    new_Value: string;
    old_Value: string;
    personal_Info_Status: string;
    personal_Type: string;
    type: string;

    constructor(options: {
        value?: any,
        key?: string,
        label?: string,
        isRequired?: boolean,
        order?: number,
        controlType?: string,
        titleValue?:any,
        title?:string,
        bindWith?:any,
        isShow?:boolean,
        child?:any,
        fieldType?:any,
        isChildRequired?:boolean,
        isEditable?:boolean, 

        adminStatus?: string,
        adminStatusbkp?: string,
        changerequesttypeid?: number,
        filePath?: string,
        hasRequested?: boolean,
        legal_agreement?: string,
        lov?: Array<any>,
        new_Value?: string,
        old_Value?: string,
        personal_Info_Status?: string,
        personal_Type?: string,
        type?: string,
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.isRequired = !!options.isRequired;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';

        this.adminStatus = options.adminStatus;
        this.adminStatusbkp = options.adminStatusbkp;
        this.changerequesttypeid = options.changerequesttypeid || null;
        this.filePath = options.filePath || '';
        this.hasRequested = options.hasRequested;
        this.legal_agreement = options.legal_agreement || '';
        this.lov = options.lov || [];
        this.new_Value = options.new_Value || '';
        this.old_Value = options.old_Value || '';
        this.personal_Info_Status = options.personal_Info_Status || '';
        this.personal_Type = options.personal_Type || '';
        this.type = options.type || '';
    }
}