import {TCreateUpdateReportTrDtos} from "../TCreateReports"
export type TEditReport = {
    year:number;
    createUpdateReportTrDtos: TCreateUpdateReportTrDtos[]
}

export type TGetReportById = {
      id: number;
    year: number;
    lang: string;
    name: string;
}