export type TProject = {
    facebook: string;
    beginDate: string;
    endDate: string;
    createProjectTrDtos: ICreateProjectTrDtos[]
}

export type ICreateProjectTrDtos = {
    lang: string;
    name: string;
    goal: string;
    result: string;
}

export type IProjectList = {
    facebook:string;
    id: number;
    beginDate: string;
    endDate: string;
    lang: string;
    name: string;
    goal: string;
    result: string;
}

export type TGetProject = {
    totalCount: number;
    list: IProjectList[];
}