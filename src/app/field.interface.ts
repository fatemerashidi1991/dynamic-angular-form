import { ActionTypeEnum } from "./components/constants/actionTypeEnum";

export interface Validator {
    name: string;
    validator: any;
    message: string;
}
export interface FieldConfig {
    label?: string;
    //name?: string;
    name: string;
    inputType?: string;
    options?: string[];
    collections?: any;
    type: string;
    value?: any;
    validations?: Validator[];
    mask?: string;
    hasThousandSeparator?: boolean;
    disable?: boolean;
    hiddenOnCreate?:boolean;
    rowNumber?:number;
    //  permissionLevel?: PermissionLevelEnum[]; 
}
    //info: inputType:
    //color
    // date
    // datetime-local
    // email
    // month
    // number
    // password
    // search
    // tel
    // text
    // time
    // url
    // week