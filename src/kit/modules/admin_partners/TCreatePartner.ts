export type TPartner = {
    createPartnerTrDtos: TCreatePartnerTrDtos[];
}
export type TCreatePartnerTrDtos ={
    lang: string;
    name: string;
}
export type TPartnerList = {
   id: number;
   lang: string;
   name: string;
}
  export type TGetPartners = {
    totalCount: number;
    list: TPartnerList[];
  }
  