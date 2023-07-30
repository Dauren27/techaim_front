export type TReport = {
    year:number;
    createUpdateReportTrDtos: TCreateUpdateReportTrDtos[]
}

export type TCreateUpdateReportTrDtos = {
    lang: string;
    name: string;
}

export type TReportList = {
    id: number;
    year: number;
    lang: string;
    name: string;
}

export type TGetReport = {
    totalcount: number;
    list: TReportList[] 
}