export interface IReports {
    id:number;
    year:number;
    name: string;
    lang: string;

}

export interface IAllReports {
    totalCount: number;
    list: Array<IReports>;
}
