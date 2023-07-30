export interface IProject {
    id: number;
    lang: string;
    beginDate: string;
    endDate: string;
    name: string;
    goal: string;
    result: string;
    photoIds: Array<number>

}


export interface IProjects{
    id: number;
    totalCount: number;
    list: Array<IProject>;
}
