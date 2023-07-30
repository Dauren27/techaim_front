import {TCreatePartnerTrDtos} from '../TCreatePartner'
 
export type TEditpartner = {
    id:number;
    createPartnerTrDtos:TCreatePartnerTrDtos[]
}

export type TGetPartnerById = {
    id:number;
    lang:string;
    name: string;
}